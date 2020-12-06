#!/usr/bin/perl

use strict;
use warnings;
use Readonly;
use Carp qw(croak);
use Fcntl qw(:DEFAULT);
use Getopt::Long;

our $VERSION = 1.000;

Readonly my $INTO_FILE      => 'README.md';
Readonly my $HEADING        => '###';
Readonly my $LANGUAGE       => 'javascript';
Readonly my $DEFAULT_ENTRY  => q{.};
Readonly my $CURRENT_FOLDER => q{.};
Readonly my $UP_FOLDER      => q{..};

sub find_js_files {
    my @queue = @_;
    my @files = ();

    LEVEL:
    while (@queue) {
        my $thing = shift @queue;

        if (not -d $thing) {
            # get all *.js files
            if ($thing =~ /[.]js$/xms) {
                push @files, $thing;
            }

            next LEVEL;
        }
        opendir my $dh, $thing or next LEVEL;

        FOLDER:
        while (my $sub = readdir $dh) {
            next FOLDER if $sub eq $CURRENT_FOLDER or $sub eq $UP_FOLDER;
            push @queue, "$thing/$sub";
        }

        closedir $dh;
    }

    return @files;
}

sub get_function_name {
    my $full_file_name = shift;

    # files are named after functions inside them, get the function name
    my @file_name_parts = split /\//xms, $full_file_name;
    my $file_name = $file_name_parts[scalar @file_name_parts - 1];
    @file_name_parts = split /[.]/xms, $file_name;

    return $file_name_parts[0];
}

sub extract_comments {
    my @files = @_;
    my $extracted_comments = {};

    FILE:
    while (@files) {
        my $full_file_name = shift @files;

        # read a file line by line
        sysopen my $source_file, $full_file_name, O_RDONLY
            or croak 'Cannot create file.';

        my $function_name = get_function_name $full_file_name;

        $extracted_comments->{$function_name} = [];
        LINE:
        while (my $line = <$source_file>) {
            # get comments
            if ($line =~ /^([\/][*]{2}|[ ][*])/xms) {
                push @{$extracted_comments->{$function_name}}, $line;
            }
        }

        close $source_file;
    }

    return $extracted_comments;
}

sub insert_comments {
    my $extracted_comments_ref = shift;

    unlink $INTO_FILE;
    sysopen my $result_file, $INTO_FILE, O_WRONLY|O_CREAT or return;

    FUNCTION:
    foreach my $function (sort keys %{ $extracted_comments_ref }) {
        # skip files with no comments
        next FUNCTION if scalar @{ $extracted_comments_ref->{$function} } == 0;

        # write function name
        printf {$result_file} "%s %s%s\n\n", $HEADING, $function, '()';

        # write comments
        printf {$result_file} "%s%s\n", '```', $LANGUAGE;
        foreach my $line (@{ $extracted_comments_ref->{$function} }) {
            printf {$result_file} '%s', $line;
        }
        printf {$result_file} "%s\n\n", '```';
    }

    close $result_file;
    return;
}

sub get_entry_folder {

    GetOptions(
        'f|folder=s' => \ my $entry_folder
    );

    if (not $entry_folder) {
        return $DEFAULT_ENTRY;
    }

    return $entry_folder;
}

###############################################################################

my $entry = get_entry_folder;
my @js_source_files = find_js_files $entry;
my $extracted_comments = extract_comments @js_source_files;
insert_comments $extracted_comments;

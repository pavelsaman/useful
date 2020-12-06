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

sub TRUE  { return 1; };
sub FALSE { return 0; };

sub is_js_file {
    my $file_name = shift;

    if ($file_name =~ /[.]js$/xms) {
        return TRUE;
    }

    return FALSE;
}

sub is_not_folder {
    my $file_name = shift;

    if (not -d $file_name) {
        return TRUE;
    }

    return FALSE;
}

sub is_comment_line {
    my $line_string = shift;

    if ($line_string =~ /^([\/][*]{2}|[ ][*])/xms) {
        return TRUE;
    }

    return FALSE;
}

sub has_no_comments {
    my $comments_ref = shift or return;

    if (scalar @{ $comments_ref } == 0) {
        return TRUE;
    }

    return FALSE;
}

sub has_comments {
    my $comments_ref = shift;

    return not has_no_comments $comments_ref;
}

sub find_js_files {
    my @queue = @_;
    my @files = ();

    LEVEL:
    while (@queue) {
        my $file_name = shift @queue;

        if (is_not_folder $file_name) {

            if (is_js_file $file_name) {
                push @files, $file_name;
            }

            next LEVEL;
        }
        opendir my $dh, $file_name or next LEVEL;

        FOLDER:
        while (my $sub = readdir $dh) {
            next FOLDER if $sub eq $CURRENT_FOLDER or $sub eq $UP_FOLDER;
            push @queue, "$file_name/$sub";
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

sub process_file_lines {
    my $file_name          = shift;
    my @extracted_comments = ();

    sysopen my $source_file, $file_name, O_RDONLY or return;

    while (my $line = <$source_file>) {
        if (is_comment_line $line) {
            push @extracted_comments, $line;
        }
    }

    close $source_file;
    return \@extracted_comments;
}

sub extract_comments {
    my @files              = @_;
    my $extracted_comments = {};

    while (@files) {
        my $file_name = shift @files;
        my $function_name = get_function_name $file_name;

        my $comments_ref = process_file_lines $file_name;
        if (has_comments $comments_ref) {
            $extracted_comments->{$function_name} = $comments_ref;
        }
    }

    return $extracted_comments;
}

sub include_heading {
    my $filehandle    = shift;
    my $function_name = shift;

    printf {$filehandle} "%s %s%s\n\n", $HEADING, $function_name, '()';
    return;
}

sub include_comments {
    my $filehandle   = shift;
    my $comments_ref = shift;

    printf {$filehandle} "%s%s\n", '```', $LANGUAGE;

    foreach my $line (@{ $comments_ref }) {
        printf {$filehandle} '%s', $line;
    }

    printf {$filehandle} "%s\n\n", '```';
    return;
}

sub process_comments {
    my $extracted_comments_ref = shift;

    unlink $INTO_FILE;
    sysopen my $result_file, $INTO_FILE, O_WRONLY|O_CREAT or return;

    FUNCTION:
    foreach my $function (sort keys %{ $extracted_comments_ref }) {
        next FUNCTION if has_no_comments $extracted_comments_ref->{$function};

        include_heading $result_file, $function;
        include_comments $result_file, $extracted_comments_ref->{$function};
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

sub run {
    my $entry = get_entry_folder;
    my @js_source_files = find_js_files $entry;
    my $extracted_comments = extract_comments @js_source_files;
    process_comments $extracted_comments;

    return;
}

run;
exit 0;

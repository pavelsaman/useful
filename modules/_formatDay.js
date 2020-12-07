'use strict';

/* eslint-disable no-magic-numbers */
export default function _formatDay (day) {
    return day.getDate() < 10 ? '0' + day.getDate() : day.getDate().toString();
}

/*
Sorting logic in ascending and descending order
*/
import { parseDateTimeForSorting } from './helpers';

export const ascSorting = (col, data) => {
    let sorted;
    if (col === 'pub_date') {
        sorted = [...data].sort((a, b) => (parseDateTimeForSorting(a[col]) > parseDateTimeForSorting(b[col]) ? 1 : -1));
    } else {
        sorted = [...data].sort((a, b) => (a[col].toLowerCase().replaceAll(' ', '') > b[col].toLowerCase().replaceAll(' ', '') ? 1 : -1));
    }
    return sorted;
};

export const dscSorting = (col, data) => {
    let sorted;
    if (col === 'pub_date') {
        sorted = [...data].sort((a, b) => (parseDateTimeForSorting(a[col]) < parseDateTimeForSorting(b[col]) ? 1 : -1));
    } else {
        sorted = [...data].sort((a, b) => (a[col].toLowerCase().replaceAll(' ', '') < b[col].toLowerCase().replaceAll(' ', '') ? 1 : -1));
    }
    return sorted;
};

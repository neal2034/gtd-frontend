import { format } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date?: Date | string | number) {
    if (!date) return ''
    return format(new Date(date), 'dd MMMM yyyy');
}
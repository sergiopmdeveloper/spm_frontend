import { format, parse } from 'date-fns'

/**
 * Formats the given date
 * @param {string | Date} props.date - The date to format
 * @returns {string} - The formatted date
 */
export default function formatDate(date: string | Date): string {
  if (typeof date === 'string') {
    date = parse(date, 'yyyy-MM-dd', new Date())
  }

  return format(date, 'MMM, yyyy')
}

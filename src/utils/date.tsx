import {MONTHS} from "@/constants/date.constants";


export function formatDate(isoDate: string) {
  const [date, time]=isoDate.split('T')
  const [year, month, monthDate]=date.split('-')
  const [hour, minute]=time.split(':')

  const MONTH_INDEX=Number(month) - 1

  return `${MONTHS[MONTH_INDEX]} ${monthDate}, ${year}, ${hour}:${minute} `
}

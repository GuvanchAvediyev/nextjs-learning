import {MONTHS} from "@/constants/date";

export function formatDate(isoDate: string) {
  const [date, time]=isoDate.split('T')
  const [year, month, monthDate]=date.split('-')
  const [hour, minute]=time.split(':')

  const monthIndex= Number(month) - 1

  return `${MONTHS[monthIndex]} ${monthDate}, ${year}, ${hour}:${minute} `
}

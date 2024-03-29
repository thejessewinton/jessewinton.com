import dayjs from 'dayjs'
import { groupBy, sortBy } from 'remeda'
import { allPlays } from '~/contentlayer'

export const getAllPlays = () => {
  const all = groupBy(allPlays, (x) => dayjs(x.date).year())
  return sortBy(Object.entries(all), ([year]) => -year)
}

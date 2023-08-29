import { allPlays, allWritings, index, type Writing } from 'content'
import dayjs from 'dayjs'
import { groupBy, sortBy } from 'remeda'

export const getIndex = () => {
  return index
}

export const getAllPlays = () => {
  const all = groupBy(
    allPlays.filter((play) => play.featured),
    (x) => dayjs(x.date).year()
  )
  return sortBy(Object.entries(all), ([year]) => -year)
}

export const getAllWritings = () => {
  const all = groupBy(allWritings, (x) => dayjs(x.date).year())
  const byYear = sortBy(Object.entries(all), ([year]) => -year)

  return byYear.map(([year, writings]) => ({
    year,
    posts: sortBy(writings, (x) => -dayjs(x.date).unix())
  }))
}

export const getWritingBySlug = ({ slug }: { slug: string }) => {
  return allWritings.find((doc) => doc.slugAsParams === slug) as Writing
}

export const nowYear = (new Date()).getFullYear()

export function getMinYearWorks(works) {
  if (!works) return undefined
  return works.reduce((a,b) => +a < +b.year ? a : b.year, nowYear)
}

export function getMaxYearWorks(works) {
  if (!works) return undefined
  return works.reduce((a,b) => +a < +b.year ? b.year : a, getMinYearWorks(works))
}

export function sortByWorks(a,b) {
  const aWorks = a.works?.length || 0
  const bWorks = b.works?.length || 0

  const aMax = getMaxYearWorks(a.works)
  const bMax = getMaxYearWorks(b.works)
  return aWorks > bWorks ? -1 : aWorks < bWorks ? 1 : aMax > bMax ? -1 : aMax < bMax ? 1 : 0
}
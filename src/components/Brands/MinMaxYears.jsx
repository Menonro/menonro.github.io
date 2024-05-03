import { useMemo } from 'react'
import { getMaxYearWorks, getMinYearWorks } from '../../utils/brands'

export default function MinMaxYears({ works }) {
  const minYear = useMemo(() => getMinYearWorks(works), [works])
  const maxYear = useMemo(() => getMaxYearWorks(works), [works])
  return minYear !== maxYear ? `${minYear} - ${maxYear}` : maxYear
}

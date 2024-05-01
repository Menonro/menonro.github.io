import React, { createContext, useEffect, useState } from 'react'

import skillsList from '../data/skills.json'

const SkillsContext = createContext({
  current: false,
  list: skillsList
})

export function SkillsContextProvider({ children }) {
  const [skill, setSkill] = useState({
    current: false,
    list: skillsList
  });
  const [first, setFirst] = useState(false);
  useEffect(() => {
    if (first) return
    const timer = setTimeout(() => {
      setSkill({
        current: 0,
        list: skill.list
      })
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [first])
  return (
    <SkillsContext.Provider
      value={{
        skill,
        setSkill: (index) => {
          setSkill({ list: skill.list, current: index })
          setFirst(true)
        }
      }}
    >
      {children}
    </SkillsContext.Provider>
  )
}

export default SkillsContext

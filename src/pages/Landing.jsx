import React from 'react'
import Skills from '../components/Skills'

import { SkillsContextProvider } from '../contexts/SkillsContext'
import SkillsSlider from '../components/SkillsSlider'

export default function Landing() {
  return (
    <SkillsContextProvider>
      <section>
        <div className="left">
          <Skills />
        </div>
        <div className="right">
          <SkillsSlider />
        </div>
        <style jsx>{`
          section {
            display: grid;
            min-height: 100vh;
            min-height: 100dvh;
            max-width: 100%;
            grid-template-columns: minmax(25%, 400px) 65%;
            grid-template-rows: minmax(70px, 1fr) auto auto 1fr;
            justify-content: center;
            justify-items: center;
            align-items: center;
            padding: 0 15px;
            grid-template-areas: "empty1 empty1" "left right" "empty2 empty2";
          }
          .left {
            padding: 15px;
            grid-area: left;
          }
          .right {
            grid-area: right;
            position: relative;
            padding: 15px;
            max-width: 100%;
            max-height: 100%;
          }
        `}</style>
      </section>
    </SkillsContextProvider>
  )
}


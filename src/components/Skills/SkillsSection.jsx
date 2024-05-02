import React from 'react'

import { SkillsContextProvider } from '../../contexts/SkillsContext'

import SkillsList from './SkillsList'
import SkillsSlider from './SkillsSlider'

export default function SKillsSection() {
  return (<SkillsContextProvider>
    <section>
      <div className="left">
        <SkillsList />
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
          grid-template-rows: 1fr auto 1fr;
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
        @media screen and (max-width: 991px) {
          section {
            grid-template-columns: 100%;
            grid-template-rows: 1fr auto auto 1fr;
            grid-template-areas: "empty1" "left" "right" "empty2";
            justify-items: stretch;
          }
          .left {
          }
        }
      `}</style>
    </section>
  </SkillsContextProvider>
  )
}

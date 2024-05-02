import React from 'react'
import BlockImgTitle from '../Typographic/BlockImgTitle'
import PercentLine from '../Typographic/PercentLine'

export default function SkillBlock({ title, icon, level, start, skills = [] }) {
  return (
    <div className='mb-4'>
      <BlockImgTitle title={ title } icon={ icon } />
      <SkillLevel level={ level } start={ start }/>
      {
        skills.map((skill, index) => <SkillRow {...skill} index={ index } key={`skill-row-${index}`}/>)
      }
    </div>
  )
}

const nowYear = (new Date).getFullYear()
function SkillLevel({ level, start }) {
  return (
    <div className="d-flex justify-content-between h5 my-3">
      <span>{ level }</span>
      <span>{ nowYear - start }+ лет</span>
    </div>
  )
}

function SkillRow({ title, percent, index }) {
  return (
    <PercentLine percent={ percent } index={ index }>
      <div className="d-flex justify-content-between">
        <span className='h6'>{ title }</span>
        <span className='h6'>{ getLevel(percent) }</span>
      </div>
    </PercentLine>
  )
}

function getLevel(percent) {
  if (percent>=70) return 'Профи'
  if (percent>=40) return 'Базовый'
  return 'Ознакомлен'
}

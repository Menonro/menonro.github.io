import React from 'react'
import BlockImgTitle from '../Typographic/BlockImgTitle'
import PercentLine from '../Typographic/PercentLine'

export default function SkillBlock({ title, icon, level, start, skills = [] }) {
  return (
    <div className='mb-4'>
      <BlockImgTitle title={ title } icon={ icon } />
      <SkillLevel level={ level } start={ start }/>
      <hr className="w-100" />
      {
        skills.map((skill, index) => <SkillRow {...skill} index={ index }/>)
      }
    </div>
  )
}

const nowYear = (new Date).getFullYear()
function SkillLevel({ level, start }) {
  return (
    <div className="d-flex justify-content-between">
      <span>{ level }</span>
      <span>{ nowYear - start }+ лет</span>
    </div>
  )
}

function SkillRow({ title, percent, index }) {
  return (
    <PercentLine percent={ percent } index={ index }>
      <span className='h6'>{ title }</span>
    </PercentLine>
  )
}

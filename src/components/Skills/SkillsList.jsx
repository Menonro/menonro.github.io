import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion"

import SkillsContext from '../../contexts/SkillsContext'

export default function SkillsList() {
  const { skill, setSkill } = useContext(SkillsContext)
  return (
    <motion.div
      className='d-flex flex-column justify-content-center align-items-center'
      initial={{
        opacity: 0,
        translateY: 40,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        delay: 0.5
      }}
      >
      <h3 className='mb-0 text-center'>
        Компетенции
      </h3>
      <hr className='w-75'/>
      {
        skill.list.map((data, index) => (
          <Skill {...data} delay={index / 5} current={skill.current === index} onClick={() => setSkill(index)} key={`skill_competention_${index}`}/>
        ))
      }
    </motion.div>
  )
}

const skillsAnimation = {
  hide: {
    translateX: -100,
    opacity: 0,
  },
  show: {
    translateX: 0,
    opacity: 1,
  },
  current: {
    translateX: 20,
    opacity: 1,
    transition: {
      delay: 0
    }
  },
}

function Skill({ icon, level, short_description, bg, delay: appendDelay = 0, current = false, onClick=()=>{} }) {
  const [delay, setDelay] = useState(1 + appendDelay);
  useEffect(() => {
    setDelay(0)
  }, [])
  return (
    <motion.div
      variants={skillsAnimation}
      initial='hide'
      animate={current ? 'current' : 'show'}
      transition={{
        delay
      }}
      className='w-100 my-1'
      >
      <div
        onClick={onClick}
        style={{ background: bg }}
        >
        <img src={icon} alt={level} />
        <span className='h5'>{ level }</span>
        <p>{ short_description }</p>
      </div>
      <style jsx>{`
        div {
          display: grid;
          width: 100%;
          grid-template: 1fr / 60px 1fr;
          grid-template-areas: 
            "image title"
            "image subtitle";
          min-height: 80px;
          gap: 10px;
          background: ;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
        div:not(:last-child) {
          margin-bottom: 20px;
        }
        img {
          object-fit: contain;
          width: 100%;
          height: 60px;
          grid-area: image;
        }
        .h5 {
          grid-area: title;
          border-bottom: 1px solid white;
        }
        p {
          grid-area: subtitle;
        }
        .h5, p {
          margin-bottom: 0;
          line-height: 1;
        }
      `}</style>
    </motion.div>
  )
}

import React, { useContext, useEffect, useState } from 'react'

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'

import SkillsContext from '../contexts/SkillsContext'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

export default function SkillsSlider() {
  const [ slider, setSlider ] = useState(false);
  const { skill, setSkill } = useContext(SkillsContext);
  useEffect(() => {
    if (!slider) return
    if (slider.activeIndex !== skill.current) slider.slideTo(skill.current)
  }, [skill.current])

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: 200,
      }}
      animate={{
        opacity: 1,
        translateX: 0
      }}
      transition={{
        delay: 1.75,
      }}
      style={{
        maxHeight: '100%',
        maxWidth: '100%'
      }}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[EffectFade, Pagination]}
          onSwiper={setSlider}
          onSlideChange={({activeIndex})=>setSkill(activeIndex)}
          effect="fade"
        >
          {
            skill.list.map((skill, index) => (
              <SwiperSlide
                id={index}
                key={`skill_slide_${index}`}
                >
                <Slide {...skill} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </motion.div>
  )
}


function Slide ({ preview, title, description }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img
        src={preview}
        alt={title}
        className='h-100 rounded'
        loading="lazy"/>
      <h3 className='my-3'>
        { title }
      </h3>
      <p className="text-center mb-3">
        { description }
      </p>
      <style jsx>{`
        p {
          max-width: 100%;
          width: 1000px;
          padding-left: 15px;
          padding-right: 15px;
        }
        img {
          object-fit: contain;
          max-height: 60vh;
        }
      `}</style>
    </div>
  )
}
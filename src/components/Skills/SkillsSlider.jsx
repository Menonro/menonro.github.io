import React, { useContext, useEffect, useState } from 'react'

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination } from 'swiper/modules'

import SkillsContext from '../../contexts/SkillsContext'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Col, Row } from 'react-bootstrap'
import SkillBar from './SkillBar'

export default function SkillsSlider() {
  const [ slider, setSlider ] = useState(false);
  const [ init, setInit ] = useState(false);
  const { skill, setSkill } = useContext(SkillsContext);
  useEffect(() => {
    if (!slider) return
    if (slider.activeIndex !== skill.current) slider.slideTo(skill.current)
  }, [skill.current])
  useEffect(() => {
    const timer = setTimeout(() => {
      setInit(true)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      variants={{
        hide: {
          opacity: 0,
          translateX: 200,
        },
        show: {
          opacity: 1,
          translateX: 0
        }
      }}
      initial='hide'
      animate={init ? 'show' : 'hide'}
      transition={{
        delay: .25
      }}
      style={{
        maxHeight: '100%',
        maxWidth: '100%'
      }}>
        {
          init && <Swiper
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
                  <Slide {...skill} active={index === slider.activeIndex}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        }
      </motion.div>
  )
}


function Slide ({ preview, title, skills = [], bg, active }) {
  const imageClip = 60
  return (
    <section>
      <div>
        <h3 className='mb-4'>
          { title }
        </h3>
        <Row className='w-100 justify-content-center'>
          {
            skills.map((skill, index) => (
              <Col xs="12" md="6" lg="auto">
                <SkillBar {...skill} active={active} delay={index / 8}/>
              </Col>
            ))
          }
        </Row>
      </div>
      <style jsx>{`
        section {
          position: relative;
          padding: 30px 15px;
          margin-bottom: 15px;
          background: url(${preview}) no-repeat center center / cover;
          height: 70vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        section:after {
          content: '';
          position: absolute;
          content: "";
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(0deg, rgba(0,0,0,.8) 100px, rgba(255,255,255,.3));
          backdrop-filter: blur(3px);
        }
        div {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        p {
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100%;
          width: 1000px;
        }
        img {
          object-fit: contain;
          max-height: 50vh;
          max-width: 100%;
        }
      `}</style>
    </section>
  )
}

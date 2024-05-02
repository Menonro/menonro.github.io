import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'


export default function PercentLine({ children, percent = 100, index }) {
  const item = useRef()
  const isView = useInView(item, {
    once: true,
  })
  return (
    <motion.div
      >
      <div ref={item}>
        { children }
        <style jsx>{`
          div {
            padding: 5px 0 10px;
            position: relative;
            margin-bottom: 5px;
          }
          div:after, div:before {
            content: '';
            position: absolute;
            bottom: 5px;
            height: 4px;
            left: 0;
            border-radius: 10px;
            background-color: white;
          }
          div:before {
            width: 100%;
            opacity: .3;
          }
          div:after {
            width: 100%;
            width: ${isView ? percent : 0}%;
            transition: width .6s cubic-bezier(0,.5,.75,1.05) ${.3 + (index / 8)}s;
          }
        `}</style>
      </div>
    </motion.div>
  )
}
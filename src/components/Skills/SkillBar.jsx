import React from 'react'

import { motion } from "framer-motion"

export default function SkillBar({ title, percent = 0, delay = 0, active = false }) {
    const radius = 25
    const stroke = 4
    const full = Math.ceil(radius * 2 * Math.PI)
    return (
      <div>
        <svg width={(radius + stroke) * 2} height={(radius + stroke) * 2}>
          <motion.circle
            r={radius}
            cx={radius + stroke}
            cy={radius + stroke}
            variants={{
              hide: {
                strokeDashoffset: full
              },
              show: {
                strokeDashoffset: full - Math.ceil(full / 100 * percent),
                transition: {
                  delay: .15 + delay,
                }
              }
            }}
            initial='hide'
            animate={active ? 'show' : 'hide'}
            transition={{
              duration: 1
            }}
            style={{
              fill: 'none',
              stroke: 'white',
              strokeWidth: stroke,
              strokeLinecap: 'round',
              strokeDasharray: full,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
            />
          <text x={radius + stroke} y={radius + stroke}>{ percent }</text>
        </svg>
        <span className="h5">
          { title }
        </span>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            min-width: 80px;
          }
          text {
            fill: white;
            text-anchor: middle;
            dominant-baseline: central;
          }
          span {
            margin-bottom: 0;
            margin-top: 10px;
          }
        `}</style>
      </div>
    )
  }
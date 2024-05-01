import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Spinner } from 'react-bootstrap';

const variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
}

export default function Form() {
  const [init, setInit] = useState(false);
  return (
    <div
      style={{
        position: 'relative'
      }}
      >
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
        initial='show'
        animate={!init ? 'show' : 'hide'}
        variants={variants}
        >
        <Spinner size='xl' variant='light'/>
      </motion.div>
      <motion.div
        initial='hide'
        animate={init ? 'show' : 'hide'}
        transition={{
          delay: 1
        }}
        variants={variants}
        >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc1BJ4JpWbCZGs1_9fzVEWNa3Nd1loAoZpWTrve9Ohyjgif0g/viewform?embedded=true"
          style={{
            width: '100%',
            height: '80vh',
          }}
          className='py-3 rounded'
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={()=>setInit(true)}>
          Загрузка…
        </iframe>
      </motion.div>
    </div>
  )
}

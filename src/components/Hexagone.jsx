import React from 'react'

export default function Hexagone({ children, text, style = {}, hide = false }) {
  return (
    <div className="hex">
      <div className='hex__inner' style={style}>
        {children}
      </div>
      <style jsx>{`
        .hex {
          position: relative;
          padding-top: 86.75%;
          width: 100%;
          text-align: center;
          cursor: pointer;
        }
        .hex__inner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          transform: rotate(0deg) translate(0%, 0%);
          clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
          transition-property: transform, clip-path, height, width, top, left;
          transition-timing-function: ease;
          transition-duration: .5s;
          ${
            !text
              ? `display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;`
              : null
          }
          ${
            !!hide
              ? `transform: rotate(360deg) scale(1.1);`
              : null
          }
        }
        .hex__inner * {
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
/* ${
  `color: rgba(0,0,0,0) !important;
    text-shadow: rgba(0,0,0,0) 0 0 0 !important;
    height: 100vh;
    width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 50%, 0 0);
    z-index: 100;`
} */
/* ${
  `.hex__inner b, .hex__inner span { color: rgba(0,0,0,0) !important; }`
} */
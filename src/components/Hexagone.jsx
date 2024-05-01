import React from 'react'

export default function Hexagone({ children, text, style = {}, hide = false }) {
  return (
    <div className="hex" style={style}>
      {children}
      <style jsx>{`
        .hex {
          position: relative;
          text-align: center;
          width: 100%;
          aspect-ratio: 100/86.75;
          overflow: hidden;
          transform: rotate(0deg) translate(0%, 0%);
          clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
          transition-property: transform, clip-path, height, width, top, left;
          transition-timing-function: ease;
          transition-duration: .5s;
          cursor: pointer;
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
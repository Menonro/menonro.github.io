import React, { useEffect, useRef } from 'react'

const range = 120

export default function Background() {
  const canvas = useRef()
  useEffect(() => {
    const root = canvas.current
    const colors = generateColors()
    let timer

    const cv = root.getContext("2d", { alpha: false });


    let hexagons = generateHexagons(colors, root)
    cv.lineWidth = 1;
    const draw = () => {
      // cv.fillRect(0, 0, w, h)
      hexagons
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.ceil(hexagons.length / 3))
        .sort((a,b) => {
          if (a.currentStep > b.currentStep) return -1
          else if (a.currentStep < b.currentStep) return 1
          return 0
        })
        .forEach((item) => {
          const currentColor = colors[item.currentStep]
          if (cv.fillStyle !== currentColor) {
            cv.fillStyle = currentColor
          }
          cv.fill(item.mesh)

          let nextStep = item.currentStep + (item.duraction ? item.speed : item.speed * -1)

          if (item.duraction && nextStep >= colors.length) {
            nextStep = nextStep - (item.speed * 2)
            item.duraction = !item.duraction
          } else if (!item.duraction && nextStep < 0) {
            nextStep = nextStep + (item.speed * 2)
            item.duraction = !item.duraction
          }
          item.currentStep = nextStep
        })
    }
    const reset = () => {
      hexagons = generateHexagons(colors, root)
    }
    timer = setInterval(() => window.requestAnimationFrame(draw), 2000)
    window.addEventListener("resize",reset);
    return () => {
      clearInterval(timer)
      window.removeEventListener("resize",reset);
    };
  }, [true]);
  return (
    <>
      <canvas ref={canvas} id="bg"/>
      <style jsx>{`
        canvas {
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100vh;
        }
        canvas:after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,.5);
          z-index: 2;
        }
      `}</style>
    </>
  )
}

function generateColors() {
  const colors = []
  let current
  for (let k = 0; k < range; k += 10) {
    current = toHex(k)
    colors.push(`#${current}${current}${current}`)
  }
  return colors
}

function toHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const grid = {
  shapeSize: 100,
  shapeApothem: 80 * Math.cos(Math.PI / 6),
  shapeSideLength: 80 * Math.sin(Math.PI / 6)
};

function generateHexagons(colors, root) {
  let ratio = window.innerWidth / window.innerHeight
  let min = Math.max(
    Math.min(window.innerWidth, window.innerHeight),
    1000
  )
  let w = root.width = Math.round(min / 4 * ratio)
  let h = root.height = Math.round(min / 4)

  let hexagons = []
  for (let c = 0; c < w / (grid.shapeSize + grid.shapeSideLength); c++) {
    for (let d = 0; d < (h + grid.shapeSize) / (grid.shapeSize * 2); d++) {
      let ty = (d * grid.shapeSize * 2) + ((c % 2) * (grid.shapeSize));
      let tx = c * (grid.shapeSize + grid.shapeApothem);

      hexagons.push({
        mesh: new polygon(tx, ty, 6, grid.shapeSize),
        duraction: true,
        currentStep: rRInt(0, colors.length),
        speed: rRInt(1, 3),
      })
    }
  }
  return hexagons
}

function polygon(x, y, ns, s) {
  this.shape = new Path2D();
  this.shape.moveTo(x + s * Math.cos(0), y + s * Math.sin(0));  
  for (let i = 1; i <= ns; i++) {
    this.shape.lineTo(x + s * Math.cos(i * 2 * Math.PI / ns), y + s * Math.sin(i * 2 * Math.PI / ns));
  }
  return this.shape;
}

function rRInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
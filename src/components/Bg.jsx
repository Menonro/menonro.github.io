import React, { Component } from 'react'

export default class Background extends Component {
  constructor() {
    super()
    this.state = {
      root: false,
      colors: [],
      speeds: 3,
      range: 50
    }
  }
  shouldComponentUpdate() {
    return false
  }
  componentDidMount() {
    this.setState({root: document.getElementById('bg')}, () => new Promise(async (res, rej) => {
      try {
        const colors = await this.generateColors()
        this.generateGrid(colors)
        res()
      } catch (e) {
        rej(e)
      }
      
    }).catch((e)=>console.log(e)))
  }
  async generateColors(speeds = this.state.speeds, range = this.state.range) {
    await new Promise((res, rej) => {
      const colors = []
      for (let i = 0; i < speeds; i++) {
        colors[i] = [];
        for (let k = 0; k < range * (i + 1); k++) {
          const color = Math.floor(k / (i + 1))
          colors[i][k] = {
            color: `rgb(${color}, ${color}, ${color})`,
            value: color
          }
        }
      }
      this.setState({ colors }, res)
    })
    return this.state.colors
  }
  generateGrid(colors) {
    const root = this.state.root
    const cv = root.getContext("2d", { alpha: false });
    let w = root.width = window.innerWidth
    let h = root.height = window.innerHeight

    let hexagons = this.generateHexagons(w, h, colors)
    cv.lineWidth = 1;
    const draw = () => {
      // cv.clearRect(0, 0, w, h);
      hexagons.forEach((item) => {
        const currentColor = colors[item.speed][item.currentStep].color
        if (cv.fillStyle !== currentColor) { cv.fillStyle = currentColor }
        cv.fill(item.mesh);
        const nextStep = item.duraction ? item.currentStep + 1 : item.currentStep - 1
        if (item.duraction) {
          if (nextStep >= colors[item.speed].length) {
            item.currentStep = nextStep - 1
            item.duraction = !item.duraction
          } else {
            item.currentStep = nextStep
          }
        } else {
          if (nextStep < 0) {
            item.currentStep = nextStep + 1
            item.duraction = !item.duraction
          } else {
            item.currentStep = nextStep
          }
        }
      })
      setTimeout(() => window.requestAnimationFrame(draw), 1000 / 20)
    }
    const reset = () => {
      w = root.width = window.innerWidth;
      h = root.height = window.innerHeight;
      hexagons = this.generateHexagons(w,h)
    }
    window.requestAnimationFrame(draw)
    window.addEventListener("resize",reset);

  }

  generateHexagons(w, h, colors = this.state.colors) {
    const grid = {
      shapeSize: 60,
      shapeSides: 6,
      shapeApothem: 60*Math.cos(Math.PI/6),
      shapeSideLength: 60*Math.sin(Math.PI/6)
    };
    let hexagons = []
    for (let c=0;c<w/(grid.shapeSize+grid.shapeSideLength);c++) {
      for (let d = 0; d < (h+grid.shapeSize)/(grid.shapeSize*2); d++) {
        let ty = (d*grid.shapeSize*2)+((c % 2)*(grid.shapeSize));
        let tx = c*(grid.shapeSize + grid.shapeApothem );
        const curnt = {
          ty,
          tx,
          mesh: new this.polygon(tx,ty,6,grid.shapeSize),
          speed: this.rRInt(0, this.state.speeds),
          duraction: true
        }
        curnt.currentStep = this.rRInt(0, colors[curnt.speed].length)
        curnt.currentStep = curnt.currentStep - (curnt.currentStep % (curnt.speed || 1))
        hexagons.push(curnt)
      }
    }
    hexagons.sort((elemPrev, elemNext) => {
      const prev = colors[elemPrev.speed][elemPrev.currentStep].value
      const next = colors[elemNext.speed][elemNext.currentStep].value
      if (prev > next) return 1
      else if (prev < next) return -1
      else return 0
    })
    return hexagons
  }

  rRInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  polygon = function polygon(x,y,ns,s) {
    this.shape = new Path2D();
    this.shape.moveTo(x+s*Math.cos(0), y+s*Math.sin(0));  
    for (let i=1;i<=ns;i++) {
      this.shape.lineTo(x+s*Math.cos(i*2*Math.PI/ns),y+s*Math.sin(i*2*Math.PI/ns));
    }
    return this.shape;
  }

  

  render() {
    return (
      <canvas id="bg">
        <style jsx>{`
          canvas {
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
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
      </canvas>
    )
  }
}
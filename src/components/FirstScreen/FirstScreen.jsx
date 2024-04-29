import React, { Component } from 'react'
import Name from './Name'
import Hexagone from '../TextHexagone'
import { Link } from "react-router-dom";

class FirstScreen extends Component  {
  state = {
    leftTop: null,
    leftBottom: null,
    rightBottom: null,
    rightTop: null,
    center: null,
    isAnimated: false
  }

  componentDidUpdate() {
    if (this.state.isAnimated) return
    const { leftTop, leftBottom, rightTop, rightBottom, center } = this.state
    const allHexadons = [ leftTop, leftBottom, rightTop, rightBottom, center ]
    let startIndex = 20
    let startTimer = 50
    if (allHexadons.filter(elem=>!!elem).length === 5) {
      this.setState({isAnimated: true})
      allHexadons.forEach(elem => {
        this.animate(elem, ++startIndex, startTimer)
        startTimer += 100
      })
    } else {
      return
    }
  }

  animate = (element, startIndex = 20, startTimer) => {
    if (!element) return setTimeout(() => this.animate(element), 10)
    const coords = element.getBoundingClientRect()
    const width = window.document.body.clientWidth
    const height = window.document.body.clientHeight
    element.style.opacity = 0
    element.style.transitionDuration = 0
    element.style.transform = `translate(${width / 2 - coords.x - coords.width / 2}px, ${height / 2 - coords.y  - coords.height / 2}px)`
    element.style.zIndex = startIndex
    setTimeout(() => {
      element.style.opacity = 100
      element.style.transitionDuration = `${0.3}s`
      element.style.transform = `translate(0px, 0px)`
    }, startTimer)
    return element
  }

  setRef = (attr) => {
    return (ref) => {
      const newState = {}
      newState[attr] = ref
      this.setState(newState)
    }
  }

  render() {

    return (
      <>
        <section className="first_screen">
          <div className="first_screen__overlay" />
          <div className="first_screen__inner">
            <div className="container">

              <div className="row h0">
                <div className="col-12 col-md-3">
                  <Link to="about">
                    <Hexagone vAlign="center" setRef={this.setRef('leftTop')} animated>
                      <div className="hexa">
                        Биография
                      </div>
                      <img src="/static/images/icons/about.svg" alt="" className="hexa__bg"/>
                    </Hexagone>
                  </Link>
                </div>
                <div className="col-12 col-md-3 offset-md-6">
                  <Link to="cases">
                    <Hexagone vAlign="center" setRef={this.setRef('leftBottom')} animated>
                      <div className="hexa">
                        Кейсы
                      </div>
                      <img src="/static/images/icons/work.svg" alt="" className="hexa__bg"/>
                    </Hexagone>
                  </Link>
                </div>
              </div>

              <div className="row overlay">
                <div className="col-12 col-md-8 offset-md-2">
                  <Hexagone
                    size="large"
                    vAlign="center"
                    imageUrl="/static/me/main.jpg"
                    hover={false}
                    setRef={this.setRef('center')}>
                    <Name type="h1"/>
                  </Hexagone>
                </div>
              </div>
            
              <div className="row h0">
                <div className="col-12 col-md-3 toTop">
                  {/* <Link to="philosophy"> */}
                    <Hexagone vAlign="center" setRef={this.setRef('rightTop')} animated>
                      <div className="hexa">
                        Философия
                      </div>
                      <img src="/static/images/icons/yin-yang.svg" alt="" className="hexa__bg"/>
                    </Hexagone>
                  {/* </Link> */}
                </div>
                <div className="col-12 col-md-3 offset-md-6 toTop">
                  <Link to="contacts">
                    <Hexagone vAlign="center" setRef={this.setRef('rightBottom')} animated>
                      <div className="hexa">
                        Контакты
                      </div>
                      <img src="/static/images/icons/contact.svg" alt="" className="hexa__bg"/>
                    </Hexagone>
                  </Link>
                </div>
              </div>

            </div>
              
          </div>
        </section>
        <style jsx>{`
          .first_screen {
            position: relative;
            min-height: 100vh;
            color: #fff;
          }
          .first_screen__overlay {
            z-index: 1;
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(33,33,33,.3);
          }
          .first_screen__inner {
            position: relative;
            min-height: 100vh;
            padding-top: 5vh;
            padding-bottom: 5vh;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media screen and (min-width: 768px) {
            .h0 { height: 0; position: relative; z-index: 20; }
            .overlay { position: relative; z-index: 19; }
            .toDown { transform: translateY(100%); }
            .toTop { transform: translateY(-100%); }
          }
          @media screen and (max-width: 767px) {
            .row > div {
              margin-top: 15px;
              margin-bottom: 15px;
            }
          }
          .hexa {
            position: relative;
            z-index: 3;
          }
          .hexa__bg {
            position: absolute;
            opacity: .2;
            top: 10px; left: 10px; right: 10px; bottom: 10px;
            object-fit: contain;
            z-index: 2;
            width: calc(100% - 20px); height: calc(100% - 20px);
          }
          a .hexa__bg {
            transition: opacity .1s ease-out;
          }
          a:hover .hexa__bg {
            opacity: .4;
          }

          @media screen and (max-width: 767px) {
            .container {
              display: flex;
              flex-direction: column;
            }
            .container > *:nth-child(2) {
              order: -1;
            }
          }
        `}</style>
      </>
    )
  }
}

export default FirstScreen
import React, { Component } from 'react'

import MenuContext from '../../contexts/MenuContext'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  static contextType = MenuContext
  render() {
    const { isOpen, toggleIsOpen } = this.context
    return (
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleIsOpen}>
          <div className="d-flex align-items-center justify-content-center flex-column h-100">
            <Link to="/">
              <span>
                Главная
              </span>
            </Link>
            <Link to="/contacts">
              <span>
                Контакты
              </span>
            </Link>
            <Link to="/about">
              <span>
                Обо мне
              </span>
            </Link>
          </div>
          <style jsx>{`
            .overlay {
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              width: 100%;
              z-index: 10000;
              background-color: white;
              transition: transform .3s ease-out;
              overflow-x: hidden;
              overflow-y: auto;
              transform: translate(-100%, -50%);
            }
            .overlay.active {
              transform: translate(0%, 0%);
            }
            span {
              color: black;
              font-size: 2rem;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
          `}</style>
        </div>
    )
  }
}

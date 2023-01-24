import React, { Component } from 'react'

import MenuContext, { MenuContextProvider } from '../../contexts/MenuContext'

export default class Menu extends Component {
  static contextType = MenuContext
  render() {
    const { isOpen, toggleIsOpen } = this.context
    return (
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleIsOpen}>
          
          <style jsx>{`
            .overlay {
              position: fixed;
              top: 0;
              left: 0;
              height: 100vh;
              width: 100%;
              z-index: 10000;
              background-color: red;
              transition: transform .3s ease-out;
              overflow-x: hidden;
              overflow-y: auto;
              transform: translate(-100%, -50%);
            }
            .overlay.active {
              transform: translate(0%, 0%);
            }
          `}</style>
        </div>
    )
  }
}

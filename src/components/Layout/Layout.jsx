import React from 'react'
import Preloader from '../Preloader/Preloader'
import 'bootstrap/dist/css/bootstrap.min.css'


import { MenuContextProvider } from '../../contexts/MenuContext'

import Menu from '../Menu/Menu'

const fav = window.document.getElementById('fav')
let currentStep = 1
const maxSteps = 20
let startDate = Date.now()
function changeFav(path) {
  if (!fav) return
  fav.setAttribute('href', `${path}_${currentStep}.png?${startDate + 500}`)
  currentStep++
  if (currentStep > maxSteps) currentStep = 1
  startDate += 500
  setTimeout((timestamp) => changeFav(path, timestamp), 500)
}

const Layout = ({ children }) => {
  changeFav('/static/images/favicons/fav')
  return (
    <MenuContextProvider>
      {/* <Preloader /> */}
      <Menu/>
      <main>
        {children}
      </main>
      <style jsx>{`
        main {
          position: relative;
          z-index: 10;
        }
      `}</style>
      {/* <style jsx global>{bootstrap}</style> */}
    </MenuContextProvider>
)
}

export default Layout

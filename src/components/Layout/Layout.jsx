import React from 'react'
// import Preloader from '../Preloader/Preloader'

import { MenuContextProvider } from '../../contexts/MenuContext'
import Menu from '../Menu/Menu'
// import Hexagone from '../Hexagone'


const Layout = ({ children }) => {
  // const [show, setshow] = useState(false);
  // useEffect(() => { setTimeout(() => setshow(true), 500) }, [])
  return (
    <MenuContextProvider>
      {/* <Preloader /> */}
      <Menu/>
      <main className='container my-5'>
        {children}
      </main>
      <style jsx>{`
        main {
          position: relative;
          z-index: 10;
        }
        {/* .transition {
          z-index: 50;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .transition__block {
          height: 50vmin;
          width: 50vmin;
        }
        .transition__hex {
          transform: scale(7) rotate(0deg);
          transition: transform 1s ease-in;
        }
        .transition__inner {
          height: 100%;
          width: 100%;
          background: rgb(0,0,0);
          transition: background 1s ease-in;
        }
        .open .transition__hex {
          transform: scale(1) rotate(360deg);
        }
        .open .transition__inner {
          background: rgb(220,220,220);
        } */}
      `}</style>
    </MenuContextProvider>
)
}

export default Layout

import { PureComponent } from 'react'
// import { PageTransition } from 'next-page-transitions'
import Background from './components/Bg'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Index from './pages/index'
import About from './pages/about'
import Cases from './pages/cases'
import Contacts from './pages/contacts'

import './styles/global.sass'

function MyApp({ Component }) {
  return <>
    <LoadFonts/>
    {/* <PageTransition timeout={300} classNames="page-transition"> */}
    <Routes>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="cases" element={<Cases />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>    
    {/* </PageTransition> */}
    <Background/>
    <style jsx global>{`
        .page-transition-enter {
          overflow-x: hidden;
        }
        .page-transition-enter-active > main {
          animation: transitionEnter .3s ease-out;
        }
        .page-transition-exit {
        }
        .page-transition-exit-active {
        }
        .page-transition-exit > main {
          animation: transitionExit .3s ease-out;
        }
        @keyframes transitionExit {
          100% {
            transform: scale(0) translateX(-100vw);
          }
        }
        @keyframes transitionEnter {
          0% {
            transform: scale(0) translateX(100vw);
          }
          100% {
            transform: scale(1) translateX(0vw);
          }
        }
      `}</style>
  </>
}

class LoadFonts extends PureComponent {
  componentDidMount() {
    if (typeof window === 'undefined') return
    function loadFont(fontName, woffUrl, woff2Url) {
    if (typeof window === "undefined") return;
      var nua = window.navigator.userAgent;
      var noSupport = !window.addEventListener || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/))
      if (noSupport) { return ; }
      var loSto = {};
      try {loSto = localStorage || {}; } catch (ex) {}
      var localStoragePrefix = "x-font-" + fontName;
      var localStorageUrlKey = localStoragePrefix + "url";
      var localStorageCssKey = localStoragePrefix + "css";
      var storedFontUrl = loSto[localStorageUrlKey];
      var storedFontCss = loSto[localStorageCssKey];
      var styleElement = document.createElement("style");
      styleElement.rel = "stylesheet";
      document.head.appendChild(styleElement);
      if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
        styleElement.textContent = storedFontCss;
      } else {
        var url = (woff2Url && supportsWoff2()) ? woff2Url : woffUrl;
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            loSto[localStorageUrlKey] = url;
            loSto[localStorageCssKey] = styleElement.textContent = request.responseText;
          }
        };
        request.send();
      }
      function supportsWoff2() {
        if (!window.FontFace) { return false; }
        var f = new FontFace("t", "url(\"data:application/font-woff2,\") format(\"woff2\")", {});
        f.load();
        return f.status === "loading";
      }
    }
    loadFont("NEXT ART", "/static/fonts/next_art/woff.css", "/static/fonts/next_art/woff.css");
  }
  render() {
    return <>
      <style jsx global>{`
        body {
          margin: 0;
          min-height: 100vh;
          background-color: #121212;
          color: #fff;
          font-family: NEXT ART, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }
        html {
          font-size: 100%;
        }
        a {
          text-decoration: inherit;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
    </>
  }
}

export default MyApp

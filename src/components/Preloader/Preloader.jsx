import React, { Component } from 'react'
import PreloaderLogo from './PreloaderLogo'


function loadFont(fontName, woffUrl, woff2Url) {
    let nua = navigator.userAgent;
    let noSupport = !window.addEventListener
        || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/))
    if (noSupport) { return; }
    let loSto = {};
    try { loSto = localStorage || {}; } catch (ex) { }
    let localStoragePrefix = 'x-font-' + fontName;
    let localStorageUrlKey = localStoragePrefix + 'url';
    let localStorageCssKey = localStoragePrefix + 'css';
    let storedFontUrl = loSto[localStorageUrlKey];
    let storedFontCss = loSto[localStorageCssKey];
    let styleElement = document.createElement('style');
    styleElement.rel = 'stylesheet';
    document.head.appendChild(styleElement);
    if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
        styleElement.textContent = storedFontCss;
    } else {
        let url = (woff2Url && supportsWoff2()) ? woff2Url : woffUrl;
        let request = new XMLHttpRequest();
        request.open('GET', url);
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
        let f = new FontFace('t', 'url("data:application/font-woff2,") format("woff2")', {});
        f.load();
        return f.status === 'loading';
    }
}

class Preloader extends Component {
    state = {
        isLoading: true,
        isAnimated: false
    }
    handleLoading = () => {
        loadFont('NEXT ART', '/static/fonts/next_art/woff.css', '/static/fonts/next_art/woff2.css');
        setTimeout(() => {
            this.setState({
                isLoading: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        isAnimated: true
                    })
                }, 300)
            })
        }, 2000)
    }

    componentDidMount() {
        typeof document !== 'undefined' && this.handleLoading()
    }
    render() {
        const { isLoading, isAnimated } = this.state
        return (
            <>
                <div className={`preloader ${!isLoading ? 'loaded' : ''} ${isAnimated ? 'animated' : ''}`}>
                    <div className="preloader__inside">
                        <PreloaderLogo/>
                    </div>
                </div>
                <style jsx>{`
                    .preloader {
                        z-index: 9999;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .3s ease-in;
                    }
                    .preloader:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        background-color: #000;
                    }
                    .preloader__inside {
                        position: relative;
                        z-index: 10000;
                    }
                    .preloader.loaded {
                        opacity: 0;
                    }
                    .preloader.loaded.animated {
                        display: none;
                    }
                `}</style>
            </>
        )
    }
}

export default Preloader
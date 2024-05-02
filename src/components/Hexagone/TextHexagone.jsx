import React from 'react';
import './Hexagone.sass'
import Hexagone from './Hexagone';

export default function TextHexagone({ children, style = {} }) {
  return (
    <Hexagone text>
      <div className="left"/>
      <div className="right"/>
      <div className='inner' style={style}>
        { children }
      </div>
      <style jsx>{`          
        .left, .right {
          height: 100%;
          width: 50%;
        }
        .left {
          float: left;
          shape-margin: 10px;
          shape-outside: polygon(0% 50%, 50% 100%, 0% 100%, 0% 0%, 50% 0%);
          clip-path: polygon(0% 50%, 50% 100%, 0% 100%, 0% 0%, 50% 0%);
        }
        .right {
          float: right;
          shape-margin: 10px;
          shape-outside: polygon(100% 50%, 50% 100%, 100% 100%, 100% 0%, 50% 0%);
          clip-path: polygon(100% 50%, 50% 100%, 100% 100%, 100% 0%, 50% 0%);
        }
        .inner {
          line-height: 1.5;
          z-index: 7;
          text-shadow: 0 0 0 #212121;
          height: 100%;
          vertical-align: middle;
          color: black;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      `}</style>
    </Hexagone>
  )
}


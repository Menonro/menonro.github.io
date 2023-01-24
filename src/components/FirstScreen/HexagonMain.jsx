import React, { PureComponent } from 'react';
import './Hexadone.sass'

function getRndInteger(min, max) {
  return (Math.random() * (max - min) + min).toFixed(3)
}

export default class HexadonMain extends PureComponent {
  container = React.createRef();
  state = {
    randDuractionAnmimated: 0
  }
  componentDidMount() {
    this.props.setRef && this.props.setRef(this.container.current)
    this.setState({randDuractionAnmimated: getRndInteger(2, 5)})
  }
  render () {
    const {
      size = 'normal',
      hover = true,
      children,
      imageUrl =false,
      color = 'black',
      vAlign = false,
      animated = false
    } = this.props
    return (
      <div>
        <div className="hexContainer" ref={this.container}>
          <div className={`hex  ${ vAlign ? 'd-flex align-items-center justify-content-center' : ''}`}>
            { !vAlign
              ?
                <>
                  <div className="hexInner hexInnerLeft"/>
                  <div className="hexInner hexInnerRight"/>
                </>
              : null
            }
            <div className={`hexInnerCenter ${ size }`}>
              <div>{ children }</div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .hexContainer {
            position: relative;
            padding-top: 86.75%;
            width: 100%;
            overflow: hidden;
            text-align: center;
          }
          .hex {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;        
            overflow: hidden;
            display: block;
            clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
            background-size: auto 100%;
            background-position: center center;
            background-repeat: no-repeat;
            ${imageUrl ? `
              background-image: url("${imageUrl}");
              box-shadow: inset 0 -100px 70px rgba(22,22,22,.8), inset 0 10px 50px rgba(22,22,22,.8);
              color: white;
            ` : `
              background-color: white;
              color: black;
            `}
            transition: .6s ease;
            cursor: pointer;
          }
          .hexContainer:before {
              content: '';
              position: absolute;
              top: -10px; left: -10px; right: -10px; bottom: -10px;
            }
          .hexContainer:hover .hex {
            ${ hover ? `
              background-size: auto 140%;
              ${imageUrl ? '' : 'background-color: #c3c3c3;'}
            ` : '' }
          }
          .hex:after {
            ${ imageUrl ? `` : ''}
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 6;
          }
          .hex:before {
            ${ imageUrl ? `` : ''}
            top: 10px; left: 10px; right: 10px; bottom: 10px;
            clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
            box-shadow: inset 0 -100px 70px black, inset 0 10px 50px black;
            background-color: white;
            background-size: auto 100%;
            background-position: center center;
            background-repeat: no-repeat;
            ${imageUrl ? `
              background-image: url("${imageUrl}");
              color: white;
            ` : `
              color: black;
            `}
            display: block;
            position: absolute;
            z-index: 5;
            transition: .15s ease-out;
          }
          
          .hexInner {
            height: 100%;
            width: 50%;
          }
          .hexInnerLeft {
              float: left;
              shape-margin: 10px;
              shape-outside: polygon(0 0, 0 100%, 50% 100%, 0 50%, 50% 0);
            }
          .hexInnerRight {
            float: right;
            shape-margin: 10px;
            shape-outside: polygon(100% 0, 100% 100%, 50% 100%, 100% 50%, 50% 0);
          }
          .hexInnerCenter {
              line-height: 1.5;
              z-index: 7;
              text-shadow: 0 0 0 #212121;
          }
          .hexInnerCenter > * {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            transition: transform .15s ease-out;
          }
          .hexInnerCenter.small {
            font-size: 1.25rem;
          }
          
          @media screen and (max-width: 991px) {
            .hexInnerCenter.small {
              font-size: 0.65rem;
            }
          }
          .hexInnerCenter .normal {
            font-size: 1.75rem;
          }
          @media screen and (max-width: 991px) {
            .hexInnerCenter .normal {
              font-size: 1.15rem;
            }
          }
          .hexInnerCenter.large {
            font-size: 2.25rem;
          }
          @media screen and (max-width: 991px) {
            .hexInnerCenter.large {
              font-size: 1.75rem;
            }
          }
          @keyframes simpleHexadonMove {
            0% { transform: translate(0%, 0%); }
            7% { transform: translate(9%, 5%); }
            14% { transform: translate(-3%, 8%); }
            21% { transform: translate(-2%, -6%); }
            28% { transform: translate(4%, 2%); }
            35% { transform: translate(-3%, 8%); }
            42% { transform: translate(-2%, -6%); }
            50% { transform: translate(9%, 5%); }
            57% { transform: translate(0%, 0%); }
            64% { transform: translate(9%, 5%); }
            71% { transform: translate(-3%, 8%); }
            78% { transform: translate(-2%, -6%); }
            85% { transform: translate(4%, 2%); }
            92% { transform: translate(-3%, 8%); }
            100% { transform: translate(0%, 0%); }
          }
        `}</style>
      </div>
    );
  }
}

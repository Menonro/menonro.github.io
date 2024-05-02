import React from 'react'
import Section from '../Base/Section'
import { Col, Row } from 'react-bootstrap'

import brandsList from '../../data/brands.json'

export default function BrandSection() {
  return (
    <>
    <Section id="clients" title="Клиенты" />
      <div className="wrap">
        <div className="items-wrap">
          <div className='d-flex flex-nowrap marquee'>
            {
              brandsList.map((brand, index) => (
                <Brand logo={brand.logo} key={`brand-${index}`}/>
              ))
            }
          </div>
          <div className='d-flex flex-nowrap marquee'>
            {
              brandsList.map((brand, index) => (
                <Brand logo={brand.logo} key={`brand-clone-${index}`}/>
              ))
            }
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrap {
          margin: auto;
          padding: 20px;
          margin-top: -3rem;
        }
        .items-wrap {
          position: relative;
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 20px;
        }
        .marquee {
          animation: scroll 30s linear infinite;
          gap: 20px;
        }
        
        .items-wrap:before,
        .items-wrap:after {
          content: "";
          height: 100%;
          top: 0;
          width: 50px;
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }
        .items-wrap:before {
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, .3) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .items-wrap:after {
          right: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, .3) 100%
          );
        }
        @keyframes scroll {
          from { transform: translateX(0) }
          to { transform: translateX(calc(-100% - 20px)) }
        }
      `}</style>
    </>
  )
}

function Brand({ logo }) {
  return (
    <>
      <figure>
        <img src={`/static/images/brands/${logo}`} alt="logo" />
      </figure>
      <style jsx>{`
        img {
          height: 60px;
          width: 100px;
          object-fit: contain;
        }
        figure {
          background-color: rgba(255,255,255,.3);
          display: flex;
          justify-content: center;
          padding: 10px;
          margin-bottom: 0;
          border-radius: 5px;
        }
      `}</style>
    </>
  )
}
import React from 'react'

export default function BrandImg({ src, width = "100%" }) {
  return (
    <>
      <img className='img' src={`/static/images/brands/${src}`} alt="logo" />
      <style jsx>{`
        img {
          width: ${width};
          max-width: 100%;
          object-fit: contain;
          filter: saturate(0.75);
          aspect-ratio: 2;
        }
      `}</style>
    </>
  )
}

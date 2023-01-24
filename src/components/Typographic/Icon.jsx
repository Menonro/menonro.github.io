import React from 'react'

export default function Icon({ url, size = 'l' }) {
    const sizes = {
        'l': 50,
        'm': 30,
        'xl': 70,
        's': 20
    }
    return (
        <>
          <img src={url} alt=""/>
          <style jsx>{`
              img {
                  max-height: ${sizes[size]}px;
                  max-width: ${sizes[size]}px;
              }
            `}</style>
        </>
    )
}

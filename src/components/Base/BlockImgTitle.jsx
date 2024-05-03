import React from 'react'

export default function BlockImgTitle({ title, icon, href = false }) {
  return (
    <IsLink href={ href }>
      <div>
        <img src={ icon } alt={ `Icon ${title}` } />
        <h4>{ title }</h4>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
            height: 80px;
          }
          img {
            width: 60px;
            height: 60px;
            object-fit: contain;
          }
          h4 {
            margin-top: 5px;
            margin-bottom: 0;
            line-height: 1;
          }
          @media screen and (min-width: 768px) {
            h4 {
              margin-left: 15px;
            }
          }
          @media screen and (max-width: 767px) {
            div {
              justify-content: center;
              position: relative;
              padding-left: 50px;
              padding-right: 50px;
            }
            img {
              position: absolute;
              left: 5px;
              height: 40px;
              width: 40px;
            }
          }
        `}</style>
      </div>
    </IsLink>
  )
}

function IsLink({ children, href }) {
  if (href) return <a href={ href } target='_blank'>{ children }</a>
  return <>{ children }</>
}
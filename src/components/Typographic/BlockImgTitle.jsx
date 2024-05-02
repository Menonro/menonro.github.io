import React from 'react'

export default function BlockImgTitle({ title, icon, href = false }) {
  return (
    <IsLink href={ href }>
      <div>
        <img src={ icon } />
        <h3>{ title }</h3>
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
          h3 {
            margin-top: 5px;
            margin-bottom: 0;
            margin-left: 15px;
            line-height: 1;
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
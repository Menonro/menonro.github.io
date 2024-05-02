import React from 'react'

import Hexagone from '../Hexagone'

export default function UserCard() {
  return (
    <article>
      <Hexagone>
        <img src="/static/images/me/photo.webp" alt="Menonro" />
      </Hexagone>
      <div>
        <h1>
          Разработчик CRM систем, сайтов, и приложений из Казахстана
        </h1>
      </div>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 100%;
        }
        div {
          margin-top: 30px;
        }
        h1 {
          margin-bottom: 0;
        }
        img {
          max-width: 100%;
          width: 200px;
          border-radius: 50%;
        }
      `}</style>
    </article>
  )
}

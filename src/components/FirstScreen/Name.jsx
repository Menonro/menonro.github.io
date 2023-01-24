import React from 'react'

const Name = ({ type, offset = false }) => {
  return (
    <>
      {
        type === 'h1'
        ?
          <div className="name__block">
            <h1 className="name">
              Джаксибаев Нитай
            </h1>
            <h2 className="skills">
              WEB Разработчик
            </h2>
          </div>
        : type === 'h2'
        ?
          <h2 className="name">
            Джаксибаев Нитай
          </h2>
        : 
          <span className="name">
            Джаксибаев Нитай
          </span>
      }
      <style jsx>{`
        .name__block {
          ${ offset ? 'padding: 15vh 15px 0;' : '' }
          text-align: center;
        }
        .name {
          font-size: calc(2.25rem + 10px);
        }
        @media screen and (max-width: 1199px) {
          .name {
            font-size: calc(1.75rem + 10px);
          }
        }
        @media screen and (max-width: 991px) {
          .name {
            font-size: calc(1.5rem + 8px);
          }
        }
        @media screen and (max-width: 768px) {
          .name {
            font-size: calc(1.75rem + 10px);
          }
        }
        @media screen and (max-width: 520px) {
          .name {
            font-size: calc(1.25rem + 10px);
          }
        }
        .skills {
          font-size: calc(1.5rem + 10px);
        }
        @media screen and (max-width: 1199px) {
          .skills {
            font-size: calc(1.25rem + 10px)
          }
        }
        @media screen and (max-width: 991px) {
          .skills {
            font-size: calc(1rem + 10px)
          }
        }
        @media screen and (max-width: 768px) {
          .skills {
            font-size: calc(1rem + 5px);
          }
        }
        @media screen and (max-width: 520px) {
          .skills {
            font-size: calc(0.25rem + 10px);
          }
        }
      `}</style>
    </>
  )
}

export default Name
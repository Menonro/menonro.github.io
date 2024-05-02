import React from 'react'

import Hexagone from '../Base/Hexagone'

import contactsList from '../../data/contacts.json'
import { Col, Row } from 'react-bootstrap'

export default function UserCard() {
  return (
    <article>
      <div className="d-flex flex-column align-items-center">
        <Hexagone>
          <img src="/static/images/me/photo.webp" alt="Menonro" />
        </Hexagone>
        <UserData />
      </div>
      <div>
        <h1>
          Разработчик CRM систем, сайтов, и приложений
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
        @media screen and (max-width: 767px) {
          article {
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </article>
  )
}


function UserData() {
  return (
    <>
      <Row className='g-2 mt-2'>
        {
          contactsList.map(({ icon, href }, index) => (
            <Col xs>
              <a href={ href } target="_blank" rel="noopener noreferrer">
                <img className='icon' src={ icon } alt="" />
              </a>
            </Col>
          ))
        }
      </Row>
      <style jsx>{`
        .contacts {
          display: flex;
          align-items: center;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
        }
        .icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      `}</style>
    </>
  )
}

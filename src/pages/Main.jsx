import React, { useState } from 'react'
import Hexagone from '../components/Hexagone'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <Row className='pt-5'>
      {/* #212121 */}
      <Tile styles={{
        background: 'linear-gradient(60deg, rgb(33,33,33) 0%, rgb(144,144,144) 100%)',
      }} route="/contacts">
        <h2>
          WEB
        </h2>
        <h4>
          Разработчик
        </h4>
        <h5>
          Menonro
        </h5>
        <hr style={{width: '50%'}}/>
        <h5>
          Контакты
        </h5>
      </Tile>
      {/* #2EC6F6 */}
      <Tile right styles={{
        background: 'linear-gradient(60deg, rgb(46,198,246) 0%, rgb(1,32,41) 100%)',
      }}>
        {/* #0065A3 */}
        <h3>
          Bitrix<span style={{color: '#0065A3'}}>24</span>
        </h3>
        <h5>
          Настройка облака
        </h5>
        <h5>
          Кастомизация коробки
        </h5>
        <hr style={{width: '50%'}}/>
        <h5>
          С 2020 в топ 50
          <br/>
          <b style={{color: 'gold'}}>золотом</b> партнёре
        </h5>
      </Tile>
      {/* #777BB3 */}
      <Tile styles={{
        background: 'linear-gradient(60deg, rgb(119,123,179) 0%, rgb(16,16,28) 100%)',
      }}>
        <h3>
          PHP
        </h3>
        <h5>
          <b style={{ color: '#FE2C1F' }}>Laravel</b> Админки
        </h5>
        <h5>
          Разработка API
        </h5>
        <h5>
          <b style={{ color: '#27A7E8' }}>Telegram</b> боты
        </h5>
        <hr style={{width: '50%'}}/>
        <h5>
          С 2018 года
        </h5>
      </Tile>
      {/* #F6DF17 */}
      <Tile styles={{
        background: 'linear-gradient(60deg, rgb(246,223,23) 0%, rgb(38,34,1) 100%)',
      }}>
        <h3>
          JS
        </h3>
        <h5>
          Разработка UI
        </h5>
        <h5>
          <b style={{ color: '#1082A7' }}>React</b> + Redux/JQuery
        </h5>
        <h5>
          <b style={{ color: '#5D6AF2' }}>Discord</b> бот на <b style={{ color: '#82CC28' }}>Node</b>
        </h5>
        <hr style={{width: '50%'}}/>
        <h5>
          С 2017 года
        </h5>
      </Tile>
      {/* #326DE4 */}
      <Tile right styles={{
        background: 'linear-gradient(60deg, rgb(50,109,228) 0%, rgb(4,15,36) 100%)',
      }}>
        <h3>
          Devops
        </h3>
        <h5>
          Новое направление
        </h5>
        <h5>
          Изучаю Docker+Kubernetes
        </h5>
        <hr style={{width: '50%'}}/>
        <h5>
          С 2024 года
        </h5>
      </Tile>
      {/* #212121 */}
      <Tile styles={{
        background: 'linear-gradient(60deg, rgb(33,33,33) 0%, rgb(144,144,144) 100%)',
      }} route="about">
        <h3>
          О себе
        </h3>
        <hr style={{width: '50%'}}/>
        <h5>
          С кем вы работаете
        </h5>
      </Tile>
      <style jsx>{`
        h2 {
          font-weight: 700;
          margin-bottom: 15px;
        }
        h3 {
          font-weight: 700;
          margin-bottom: 15px;
        }
        h4 {
        }
        h5 {
        }
      `}</style>
    </Row>
  )
}

function Tile({ children, right = false, styles = false, route = '/' }) {
  const [click, setclick] = useState(false);
  return (
    <>
      <Col xs="12" md="4">
        <Link to={route}>
          <div onClick={() => setclick(!click)}>
            <Hexagone style={{
              ...(styles || { background: '#636363' }),
            }} hide={click}>
              { children }
            </Hexagone>
          </div>
        </Link>
      </Col>
      <style jsx>{`
        @media screen and (min-width: 768px) {
          div {
            top: ${right ? '-50%' : '0'};
            position: relative;
            margin-top: 50%;
          }
        }
        @media screen and (max-width: 767px) {
          div {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  )
}


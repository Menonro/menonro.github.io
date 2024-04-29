import React, { useState } from 'react'
import Hexagone from '../components/Hexagone'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <Row className='pt-5'>
      <Tile styles={{
        background: '#212121',
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
      <Tile right styles={{
        background: '#2EC6F6',
      }}>
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
      <Tile styles={{
        background: '#777BB3',
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
      <Tile styles={{
        background: '#F6DF17',
        color: 'black'
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
      <Tile right styles={{
        background: '#326DE4',
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
      <Tile styles={{
        background: '#212121',
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


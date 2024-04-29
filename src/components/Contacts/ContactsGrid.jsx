import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Hexagone from '../TextHexagone'

import contacts from './contacts.json'

export default class ContactsGrid extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {
                        contacts.map( (el, index) => (
                            <ContactLink href={el.href} imgSrc={el.imgSrc} key={`contacts-loop-${index}`}/>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}


const ContactLink = ({ href, imgSrc }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <a href={href} target="_blank">
                <Hexagone vAlign="center" animated hover>
                    <img src={imgSrc}/>
                </Hexagone>
            </a>
            <style jsx>{`
                img {
                    width: 75px;
                }
                div {
                    margin-top: 30px;
                }
                @media screen and (min-width: 992px) {
                    div:nth-child(even) {
                        margin-top: 60px;
                        transform: translateY(50%);
                    }
                }
                @media screen and (min-width: 576px) and (max-width: 767px) {
                    div:nth-child(even) {
                        margin-top: 60px;
                        transform: translateY(50%);
                    }
                }
                @media screen and (min-width: 768px) and (max-width: 991px) {
                    div:nth-child(3n-1) {
                        margin-top: 60px;
                        transform: translateY(50%);
                    }
                }
            `}</style>
        </div>
    );
}


import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import biographyData from './biography.json'

export default class BiographyGrid extends Component {
    render() {
        return (
            <Container>
                <ul>
                    {
                        biographyData.map((data, index) => (
                            <BiographyItem {...data} key={`biography-item-${index}`}/>
                        ))
                    }
                </ul>
                <style jsx>{`
                    ul {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }
                `}</style>
            </Container>
        )
    }
}


const BiographyItem = ({ data, title, text, link = false }) => {
    return (
        <li>
            <small className="time">{data}</small>
            <h4 className="title">{title}</h4>
            <p className="text">{text}</p>
            {
                link 
                    ?
                        <Link to={link.url} className="link">
                            {link.title}
                        </Link>
                    : null
            }
            <style jsx>
                {`
                    li {
                        display: block;
                        position: relative;
                        width: 50%;
                        padding: 15px 30px;
                        transition: transform .3s ease-out;
                    }
                    li:first-child:before {
                        height: 100%;
                        top: calc(20px + .5rem);
                        height: calc(100% - 20px);
                    }
                    li:last-child:before {
                        border-bottom-left-radius: 15px 20px;
                        border-bottom-right-radius: 15px 20px;
                    }
                    li:nth-child(even) {
                        margin-left: auto;
                    }
                    li:nth-child(even):after, li:nth-child(even):before {
                        right: auto;
                        left: 0;
                        transform: translateX(-50%);
                    }
                    li:nth-child(odd) {
                        text-align: right;
                    }
                    li:after, li:before {
                        content: '';
                        position: absolute;
                        left: auto;
                        right: 0;
                        transform: translateX(50%);
                    }
                    li:after {
                        width: 20px;
                        border-radius: 50%;
                        border: 5px solid #c3c3c3;
                        height: 20px;
                        top: calc(15px + 0.55rem);
                        background-color: #212121;
                        z-index: 12;
                        transition: background-color .3s ease-out,
                            border-width .3s ease-out;
                    }
                    li:before {
                        width: 5px;
                        height: 100%;
                        top: 0;
                        background-color: #c3c3c3;
                        z-index: 11;
                    }
                    li:hover:after {
                        background-color: #cecece;
                        border-width: 2px;
                    }
                    li:hover:nth-child(odd) > * {
                        transform: translateX(-15px);
                    }
                    li:hover:nth-child(even) > * {
                        transform: translateX(15px);
                    }
                    li > * {
                        display: block;
                        transition: transform .3s ease-out;
                    }
                    .time {
                        font-size: 1.5rem;
                    }
                    .title {
                        font-size: 1.75rem;
                    }
                    .text {
                        font-size: 1.15rem;
                        font-family: sans-serif;
                    }
                    .link {
                        font-size: 1.35rem;
                    }
                `}
            </style>
        </li>
    );
}


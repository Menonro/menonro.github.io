import React from 'react'
import {
    useNavigate,
  } from 'react-router-dom';


import Btn from './Btn'
import Icon from './Icon'

export default function BackBtn() {
    const navigate = useNavigate();

    return (
        <Btn direction="left" onClick={() => navigate(-1)}>
            <Icon url="/static/images/icons/left.png" size="m"/>
        </Btn>
    )
}

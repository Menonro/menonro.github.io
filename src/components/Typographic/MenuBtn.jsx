import React from 'react'

import Btn from './Btn'
import Icon from './Icon'

import MenuContext from '../../contexts/MenuContext'

export default function MenuBtn() {
    return (
        <MenuContext.Consumer>
            {
                ({ isOpen, toggleIsOpen }) => (
                    <Btn direction="right" onClick={toggleIsOpen}>
                        <Icon url={`/static/images/icons/${isOpen ? 'close' : 'menu'}.png`} size="m"/>
                    </Btn>
                )
            }
        </MenuContext.Consumer>
    )
}

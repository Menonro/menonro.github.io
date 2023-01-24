import React, { createContext, PureComponent } from 'react'


const MenuContext = createContext({
    isOpen: false,
    toggleIsOpen: () => {}
})

export class MenuContextProvider extends PureComponent {
    state = {
        isOpen: false,
        toggleIsOpen: () => {
            this.setState({isOpen: !this.state.isOpen})
        }
    }
    render() {
        return (
            <MenuContext.Provider value={this.state}>
                {this.props.children}
            </MenuContext.Provider>)
    }
}

export default MenuContext
import React, { Component } from 'react'
import { NavItems } from './NavItems'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="titulo">Violência contra a Mulher</h1>

                <ul>
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                   
                </ul>
            </nav>
        )
    }
}

export default Navbar;
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './index.css'

class Navbar extends Component {
   
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">- NOSSA VOZ -</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
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

export default Navbar
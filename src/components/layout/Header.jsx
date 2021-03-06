import React from 'react'
import { Link } from 'react-router'

import avatar from '../../images/avatar.png'


const Header = () => (
    <header className="mb40">
        <div className="container">
            <div className="row cf">
                <div className="col-6">
                    <Link className="logo text-uppercase" to="/">
                        Logo
                    </Link>
                </div>
                <div className="col-6 text-right">
                    
                    <a className="badge" href="#">
                        <i className="fa fa-bell"></i>
                        <span className="badge__pin">3</span>
                    </a>

                    <div className="avatar">
                        <a href="#" className="avatar__name">John Smith</a>
                        <img src={avatar} alt="" className="avatar__thumbnail" />                    
                    </div>
                </div>
            </div>

        </div>
    </header>
)

export default Header
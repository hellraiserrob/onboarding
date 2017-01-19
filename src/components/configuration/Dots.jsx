import React, { Component } from 'react'
import { Link } from 'react-router'

class Dots extends Component {

    render() {

        const { services } = this.props
        
        return (
            <ul className="dots">
                {services.map((service, index) => <li key={index}>
                    <Link activeClassName="active" to={`/configuration/service/${service.id}`} title={service.name}>{service.name}</Link>
                </li>)}
            </ul>
        )
    }
}

export default Dots

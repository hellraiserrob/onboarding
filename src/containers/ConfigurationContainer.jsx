import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ConfigurationContainer extends Component {


    render() {

        console.log(this.props)

        const { services, children } = this.props

        return (
            <div>

                <h2 className="mb20">Configurations</h2>

                <ul className="mb20">
                {services.map(service => {
                    return <li key={service.id}>
                        <Link to={`/configuration/service/${service.id}`}>{service.name}</Link>
                    </li>
                })}
                </ul>

                {children && React.cloneElement(children, {
                    key: location.pathname
                })}


            </div>
        )
    }
}

function mapStateToProps(state) {

    const { isError, services } = state.configurationReducer

    return {
        isError,
        services
    }
}


export default connect(mapStateToProps)(ConfigurationContainer)

import React, { Component } from 'react'

class ServiceConfigurationList extends Component {


    render() {

        const { service, setConfiguration } = this.props

        return (
            <div>
            
                <ul>

                    {!service.configurations.length &&
                        <li><div className="alert">No configurations</div></li>
                    }

                    {service.configurations.map((configuration, index) => {
                        return <li key={index}>
                            <a href="#" onClick={(e) => setConfiguration(e, configuration)}>{configuration.name}</a>
                        </li>
                    })}
                    
                </ul>
                
            </div>
        )
    }
}

export default ServiceConfigurationList

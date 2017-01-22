import React, { Component } from 'react'

import Alert from '../other/Alert'

class ServiceHeader extends Component {


    render() {

        const { service } = this.props

        return (
            <div className="mb30">
            
                <h2 className="mb10">{service.name}</h2>
                <p>
                    {service.description}
                </p>

                {service.isGlobal &&
                    <Alert>This is a global configuration</Alert>
                }

                
                
            </div>
        )
    }
}

export default ServiceHeader

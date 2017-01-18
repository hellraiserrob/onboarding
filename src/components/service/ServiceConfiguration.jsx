import React, { Component } from 'react'

class ServiceConfiguration extends Component {


    render() {

        const { configuration } = this.props

        return (
            
            <div>
            
                <h4>{configuration.name}</h4>
                
            
                
            </div>
        )
    }
}

export default ServiceConfiguration

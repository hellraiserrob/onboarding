import React, { Component } from 'react'
import { connect } from 'react-redux'

import ServiceHeader from '../components/service/ServiceHeader'
import ServiceConfigurationList from '../components/service/ServiceConfigurationList'
import ServiceConfiguration from '../components/service/ServiceConfiguration'

import Alert from '../components/other/Alert'

class ServiceContainer extends Component {

    
    constructor(props){
        
        super(props)

        this.state = {
            configuration: null
        }

        this.setConfiguration = this.setConfiguration.bind(this)

    }

    setConfiguration(e, configuration){
        
        e.preventDefault()
        
        this.setState({
            configuration
        })

    }

    getService(services){

        const id = parseInt(this.props.params.id, 0)
        
        return services.filter((service) => {
            return service.id === id ? true: false
        })[0]

    }

    render() {

        const service = this.getService(this.props.services)

        

        return (
            <div>
                <ServiceHeader service={service} />
                <div className="row cf">
                    <div className="col-4">
                        <ServiceConfigurationList service={service} setConfiguration={this.setConfiguration} />
                    </div>
                    <div className="col-8">

                        {!this.state.configuration &&
                            <Alert>Select a configuration</Alert>
                        }

                        
                        {this.state.configuration &&
                            <ServiceConfiguration configuration={this.state.configuration} />
                        }



                    </div>
                </div>
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


export default connect(mapStateToProps)(ServiceContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ServiceHeader from '../components/service/ServiceHeader'
import ServiceConfigurationList from '../components/service/ServiceConfigurationList'
// import ServiceConfiguration from '../components/service/ServiceConfiguration'

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//import Alert from '../components/other/Alert'

import getService from '../utils/getService.js'

class ServiceContainer extends Component {

    render() {

        const { services, children } = this.props
        const serviceId = parseInt(this.props.params.serviceId, 0)
        const service = getService(services, serviceId)

        return (
            <div>
                <ServiceHeader service={service} />
                <div className="row no-gutter cf">
                    <div className="col-4">    
                        <ServiceConfigurationList service={service} />
                    </div>
                    <div className="col-8">

                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={300}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                            >

                            {children && React.cloneElement(children, {
                                key: location.pathname
                            })}

                        </ReactCSSTransitionGroup>


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

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

import Summary from '../components/configuration/Summary'
import Next from '../components/configuration/Next'
import Previous from '../components/configuration/Previous'
import Dots from '../components/configuration/Dots'


class ConfigurationContainer extends Component {


    render() {

        const { services, children } = this.props
        const serviceId = this.props.params.serviceId

        return (
            <div>

                <Summary services={services} />

                <div className="row cf mb20">
                    <div className="col-6">
                        <Previous serviceId={serviceId} services={services} />
                    </div>
                    <div className="col-6 text-right">
                        <Next serviceId={serviceId} services={services} />
                    </div>
                </div>
                

                <hr className="mb20" />

                <Dots serviceId={serviceId} services={services} />

                <hr className="mb20" />            

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

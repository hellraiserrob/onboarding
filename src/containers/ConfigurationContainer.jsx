import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'


import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
                
                <hr className="mb30" />     

                <div className="row cf mb20">
                    <div className="col-4">
                        <Previous serviceId={serviceId} services={services} />
                    </div>
                    <div className="col-4">
                        <Dots serviceId={serviceId} services={services} />
                    </div>
                    <div className="col-4 text-right">
                        <Next serviceId={serviceId} services={services} />
                    </div>
                </div>
                


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

                <hr className="mb30" />     

                <div className="row cf mb20">
                    <div className="col-4">
                        <Previous serviceId={serviceId} services={services} />
                    </div>
                    <div className="col-4">
                        <Dots serviceId={serviceId} services={services} />
                    </div>
                    <div className="col-4 text-right">
                        <Next serviceId={serviceId} services={services} />
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


export default connect(mapStateToProps)(ConfigurationContainer)

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

                <div className="row mb20 cf">
                    <div className="col-8">
                        <h1 className="text-uppercase text-100">
                            {/*<i className="fa fa-paper-plane-o"></i>*/}
                            Product Name
                        </h1>
                    </div>
                    <div className="col-4">

                        <div className="relative">
                            <div className="select-field__arrow">
                                <div className="fa fa-caret-down"></div>
                            </div>
                            <select defaultValue="0" className="select-field select-field--naked">
                                <option value="0">Select a Product</option>
                                <option value="1">Product Name</option>
                                <option value="2">Another Name</option>
                            </select>
                        </div>

                    </div>
                </div>


                <hr className="mb30" />

                <Summary services={services} />

                <hr className="mb30" />

                <div className="row cf mb30">
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

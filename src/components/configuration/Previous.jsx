import React, { Component } from 'react'
import { Link } from 'react-router'

class Previous extends Component {

    getPrevious(services, serviceId) {

        let previous = null

        services.forEach((service, index) => {
            
            if(service.id === parseInt(serviceId, 0)){

                previous = services[index - 1]

            }

        })        

        return previous
    }


    render() {

        const { services, serviceId } = this.props
        const previous = this.getPrevious(services, serviceId)

        return (
            <div className="">
                {previous &&
                    <Link to={`/configuration/service/${previous.id}`}><i className="fa fa-chevron-left"></i> {previous.name}</Link>
                }
            </div>
        )
    }
}

export default Previous

import React, { Component } from 'react'
import { Link } from 'react-router'

class Next extends Component {


    getNext(services, serviceId) {

        let next = null

        services.forEach((service, index) => {
            
            if(service.id === parseInt(serviceId, 0)){

                next = services[index + 1]

            }

        })        

        return next
    }






    render() {

        const { services, serviceId } = this.props
        const next = this.getNext(services, serviceId)

        return (
            <div className="">
                {next &&
                    <Link to={`/configuration/service/${next.id}`}>{next.name} &gt;</Link>
                }
            </div>
        )
    }
}

export default Next

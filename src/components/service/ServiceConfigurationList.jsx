import React, { Component } from 'react'
import { Link } from 'react-router'

class ServiceConfigurationList extends Component {

    isComplete(setting){

        let total = 0
        let complete = 0
        
        if(setting.isRequired){
            setting.fields.forEach((field) => {
                if(field.value !== '' && field.value !== '-1'){
                    complete +=1
                }
                if(field.isRequired){
                    total +=1
                }
            })
        }

        return {
            total, complete
        }
    }

    render() {

        const { service } = this.props

        return (
            <div>
            
                <ul>

                    {!service.settings.length &&
                        <li><div className="alert">No configurations</div></li>
                    }

                    {service.settings.map(setting => {

                        let status = this.isComplete(setting)

                        return <li key={setting.id}>
                            <Link to={`/configuration/service/${service.id}/settings/${setting.id}`}>
                                {setting.name} 

                                {setting.isRequired && 
                                    <span>
                                         ({status.complete} / {status.total})
                                    </span>
                                }
                            </Link>
                        </li>
                    })}
                    
                </ul>
                
            </div>
        )
    }
}

export default ServiceConfigurationList

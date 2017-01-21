import React, { Component } from 'react'
import { Link } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ProgressBar from '../other/ProgressBar'

class ServiceConfigurationList extends Component {

    isComplete(setting){

        let total = 0
        let complete = 0
        
        if(setting.isRequired){
            setting.fields.forEach((field) => {
                if(field.value !== '' && field.value !== '-1' && field.isRequired){
                    complete +=1
                }
                if(field.isRequired){
                    total +=1
                }
            })
        }

        return {
            total, complete,
            percent: this.getPercent(complete, total)
        }
    }

    getPercent(complete, total){
        return Math.round(complete / total * 100)
    }

    render() {

        const { service } = this.props
        const empty = <li><div className="alert">No configurations</div></li>

        const list = service.settings.map(setting => {

            let status = this.isComplete(setting)

            return <li key={setting.id}>
                <Link activeClassName="active" to={`/configuration/service/${service.id}/settings/${setting.id}`}>
                    
                    {setting.name} 

                    {setting.isRequired && 
                        <ProgressBar percent={status.percent} />
                    }
                </Link>
            </li>
        })

        return (
            <div>
            
                <ul className="nav-list">

                    {!service.settings.length &&
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={300}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                            >       
                            {empty}
                        </ReactCSSTransitionGroup>
                    }

                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        >       
                        {list}
                    </ReactCSSTransitionGroup>
                    
                </ul>
                
            </div>
        )
    }
}

export default ServiceConfigurationList

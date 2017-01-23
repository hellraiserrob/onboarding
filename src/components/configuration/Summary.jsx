import React, { Component } from 'react'
import ProgressBar from '../other/ProgressBar'

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import Number from './Number'

class Summary extends Component {

    

    getProgress(services) {
        let total = 0, complete = 0

        services.forEach((service) => {

            service.settings.forEach(setting => {
                
                setting.fields.forEach((field) => {
                    if(field.value !== '' && field.value !== '-1' && field.isRequired){
                        complete +=1
                    }
                    if(field.isRequired){
                        total +=1
                    }
                })

            })
            

        })

        return {
            total, complete,
            percent: this.getPercent(complete, total)
        }
    }


    getPercent(complete, total){
        return Math.round(complete / total * 100)
    }

    



    render() {

        const { services } = this.props

        const progress = this.getProgress(services)

        const data = [1,10,8,2,9,10,0,1,5,30,30,3,40,5,20,7,20]

        return (
            <div className={`row cf mb30 `} >
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Product type</p>
                    <h1 className="mb10">Credit</h1>
                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Association</p>
                    <h1 className="mb10">Visa</h1>
                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Progress</p>
                    <Number percent={progress.percent} delay={300} />
                    
                    <div className="mb10">
                        <ProgressBar percent={progress.percent} />
                    </div>

                    <small>{progress.complete}/{progress.total} mandatory problem parameters</small>

                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Tasks per day</p>
                    <div className="relative mb25">
                        <h1 className="mb10">8</h1>
                        <div className="spark">
                            <Sparklines data={data} width={100} height={25} margin={1}>
                                <SparklinesLine color="#df073a" style={{ strokeWidth: "1.5px"}} />
                                 <SparklinesReferenceLine type="mean" />
                            </Sparklines>
                        </div>
                    </div>
                    <small>On average in the last month</small>
                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Feature requests</p>
                    <h1 className="mb30">2</h1>

                    <a href="#" className="btn btn--danger btn--block btn--xs">Request a feature</a>
                </div>
            </div>
        )
    }
}

export default Summary

import React, { Component } from 'react'

class Summary extends Component {

    // componentDidUpdate(){
    //     this.highlight()
    // }


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

       

        return (
            <div className="row cf mb30">
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
                    <h1 className="mb10">{progress.percent}%</h1>
                    <small>{progress.complete}/{progress.total} mandatory problems parameters</small>
                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Tasks per day</p>
                    <h1 className="mb10">8</h1>
                    <small>On average since 00/00/00</small>
                </div>
                <div className="col-20">
                    <p className="mb10 text-uppercase text-15">Feature requests</p>
                    <h1 className="mb10">0</h1>

                    <a href="#">Request a feature</a>
                </div>
            </div>
        )
    }
}

export default Summary

import React, { Component } from 'react'

import Field from './Field'

class Fields extends Component {

    render() {

        let { settings, serviceId } = this.props

        return (
            <div>
                
                {settings.fields &&
                    settings.fields.map((field, index) => <Field 
                                                            serviceId={serviceId}
                                                            settingsId={settings.id}
                                                            setField={this.props.setField}
                                                            field={field}
                                                            key={index} />)
                }

                <div className="row">
                    <div className="col-6">
                        <button onClick={() => this.props.resetFields(serviceId, settings.id)} className="btn btn--secondary">Reset</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn">Save</button>
                    </div>
                </div>
                
            </div>
        )
    }
}



export default Fields

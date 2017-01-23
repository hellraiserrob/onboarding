import React, { Component } from 'react'

// import shortid from 'shortid' 
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
                                                            key={field.id} />)
                }

                <hr className="mb20" />

                <div className="row cf">
                    <div className="col-6">
                        <a href="#" onClick={(e) => this.props.resetFields(e, serviceId, settings.id)} className="btn btn--secondary">Reset</a>
                    </div>
                    <div className="col-6 text-right">
                        <a href="#" className="btn">Save</a>
                    </div>
                </div>
                
            </div>
        )
    }
}



export default Fields

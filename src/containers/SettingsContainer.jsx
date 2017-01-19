import React, { Component } from 'react'
import { connect } from 'react-redux'

import getService from '../utils/getService.js'
import getSettings from '../utils/getSettings.js'

import { setField } from '../actions/configurationActions.js'
import { resetFields } from '../actions/configurationActions.js'


import Fields from '../components/settings/Fields'

class SettingsContainer extends Component {


    render() {

        const { services } = this.props

        const serviceId = parseInt(this.props.params.serviceId, 0)
        const settingsId = parseInt(this.props.params.settingId, 0)

        const service = getService(services, serviceId)
        const settings = getSettings(service, settingsId)

        return (
            <div className="p30 bg-white cf">
                <h4 className="mb10">{settings.name} </h4>
                <p>{settings.description}</p>
                
                <Fields serviceId={service.id} resetFields={this.props.handleResetFields} setField={this.props.handleSetField} settings={settings} />

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

function mapDispatchToProps(dispatch) {
	return {
		handleSetField(serviceId, settingsId, fieldId, txt) {
			dispatch(setField(serviceId, settingsId, fieldId, txt))
		},
        handleResetFields(serviceId, settingsId) {
			dispatch(resetFields(serviceId, settingsId))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)

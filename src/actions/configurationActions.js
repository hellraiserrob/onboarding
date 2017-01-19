
export function setField(serviceId, settingsId, fieldId, txt){
    return {
        type: 'SET_FIELD',
        payload: {
            serviceId, settingsId, fieldId, txt
        }
    }
}

export function resetFields(serviceId, settingsId){
    return {
        type: 'RESET_FIELDS',
        payload: {
            serviceId, settingsId
        }
    }
}
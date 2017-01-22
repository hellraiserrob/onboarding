const initialState = {
    isError: false,
    services: [{
        id: 1,
        name: 'Service #1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sequi aliquid hic deleniti, tempore animi ipsa similique omnis suscipit, quibusdam repudiandae, et doloremque non excepturi, nesciunt quos neque qui esse?',
        isGlobal: true,
        settings: [{
            id: 1,
            name: 'Settings #1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            isRequired: true,
            fields: [{
                id: 1,
                label: 'Image',
                type: 'file',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 2,
                label: 'Minimum',
                placeholder: 'Enter a minimum',
                type: 'number',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 3,
                label: 'Type',
                type: 'select',
                value: '-1',
                originalValue: '-1',
                isRequired: true,
                options: [{value: '-1', label: 'Select a type'},{value: '1', label: 'Credit Card'},{value: '2', label: 'Debit Card'}]
            },{
                id: 4,
                label: 'Logic',
                type: 'radio',
                value: '-1',
                originalValue: '-1',
                isRequired: false,
                options: [{value: '1', label: 'Yes'},{value: '2', label: 'No'}]
            }]
        }, {
            id: 2,
            name: 'Settings #2',
            isRequired: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            fields: [{
                id: 5,
                label: 'Different',
                placeholder: 'Enter a different',
                type: 'text',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 6,
                label: 'Minimum 2',
                placeholder: 'Enter a minimum',
                type: 'number',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 7,
                label: 'Logic',
                type: 'radio',
                value: '-1',
                originalValue: '-1',
                isRequired: false,
                options: [{value: '1', label: 'Yes'},{value: '2', label: 'No'}]
            }]
        }]
    }, {
        id: 2,
        name: 'Service #2',
        description: 'Consectetur adipisicing elit. Ea sequi aliquid hic deleniti, tempore animi ipsa similique omnis suscipit, quibusdam repudiandae, et doloremque non excepturi, nesciunt quos neque qui esse?',
        isGlobal: false,
        settings: [{
            id: 1,
            name: 'Settings #1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            isRequired: true,
            fields: [{
                id: 8,
                label: 'Image',
                type: 'file',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 9,
                label: 'Minimum',
                placeholder: 'Enter a minimum',
                type: 'number',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 10,
                label: 'Type',
                type: 'select',
                value: '-1',
                originalValue: '-1',
                isRequired: true,
                options: [{value: '-1', label: 'Select a type'},{value: '1', label: 'Credit Card'},{value: '2', label: 'Debit Card'}]
            },{
                id: 11,
                label: 'Logic',
                type: 'radio',
                value: '-1',
                originalValue: '-1',
                isRequired: false,
                options: [{value: '1', label: 'Yes'},{value: '2', label: 'No'}]
            }]
        }, {
            id: 2,
            name: 'Settings #2',
            isRequired: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            fields: [{
                id: 12,
                label: 'Different',
                placeholder: 'Enter a different',
                type: 'text',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 13,
                label: 'Minimum 2',
                placeholder: 'Enter a minimum',
                type: 'number',
                value: '',
                originalValue: '',
                isRequired: true
            },{
                id: 14,
                label: 'Logic',
                type: 'radio',
                value: '-1',
                originalValue: '-1',
                isRequired: false,
                options: [{value: '1', label: 'Yes'},{value: '2', label: 'No'}]
            }]
        }]
    }, {
        id: 3,
        name: 'Service #3',
        description: 'Consectetur adipisicing elit. Ea sequi aliquid hic deleniti, tempore animi ipsa similique omnis suscipit, quibusdam repudiandae, et doloremque non excepturi, nesciunt quos neque qui esse?',
        isGlobal: false,
        settings: []
    }, {
        id: 4,
        name: 'Service #4',
        description: 'Consectetur adipisicing elit. Ea sequi aliquid hic deleniti, tempore animi ipsa similique omnis suscipit, quibusdam repudiandae, et doloremque non excepturi, nesciunt quos neque qui esse?',
        isGlobal: false,
        settings: []
    }]
}

function configurationReducer(state = initialState, action) {


    switch (action.type) {

        case 'SET_FIELD': {

            let { serviceId, settingsId, fieldId, txt } = action.payload;

            return { services: state.services.map((service) => {
                service.settings.map((setting) => {
                    setting.fields.map((field) => {
                        if (service.id === serviceId && setting.id === settingsId && field.id === fieldId) {
                            field.value = txt
                        }
                        return field
                    })
                    return setting
                })
                return service
            })}

        }
        
        case 'RESET_FIELDS': {

            let { serviceId, settingsId } = action.payload;

            return { services: state.services.map((service) => {
                service.settings.map((setting) => {
                    setting.fields.map((field) => {
                        if (service.id === serviceId && setting.id === settingsId) {
                            field.value = field.originalValue
                        }
                        return field
                    })
                    return setting
                })
                return service
            })}

        }



        default: {
            return state;
        }
    }



}

export default configurationReducer;
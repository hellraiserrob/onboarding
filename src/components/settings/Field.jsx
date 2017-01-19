import React, { Component } from 'react'

class Field extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.isChecked = this.isChecked.bind(this)
        this.setDirty = this.setDirty.bind(this)

        this.state = {
            pristine: true,
            value: ''
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value: nextProps.field.value
        })
    }



    handleChange(e){

        let text = e.target.value
        let { serviceId, settingsId} = this.props
        let fieldId = this.props.field.id
        this.props.setField(serviceId, settingsId, fieldId, text)

        this.setDirty();
        
    }

    setDirty(){
        this.setState({
            pristine: false
        })
    }

    isChecked(field, option){
   
        if(field.value === option.value){
            return true
        }

        return false

    }

    render() {

        let { field } = this.props

        return (
            <div className="mb20">
                
                <label>
                    {field.label} {field.isRequired && <span>*</span>}
                </label>

                {(field.type === 'text' || field.type === 'number') &&
                    <input placeholder={field.placeholder} type={field.type} value={this.state.value} className="text-field" onBlur={this.setDirty} onChange={this.handleChange} />
                }

                
                {field.type === 'radio' &&

                    field.options.map((option, index) =>  {

                        let checked = this.isChecked(field, option)

                        return <label className="radio" key={index}>
                            <input checked={checked} name={field.label} type="radio" onChange={this.handleChange} value={option.value} /> {option.label}
                        </label>

                    }
                    )
                }

                {field.type === 'select' &&
                    <select value={field.value} className="select-field" onBlur={this.setDirty} onChange={this.handleChange}>
                        {field.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
                    </select>
                }

                {(field.isRequired && !this.state.pristine) && (this.state.value.length === 0 || this.state.value === '-1') &&
                    <div className="error">{field.label} is a required field</div>
                }

                
            </div>
        )
    }
}



export default Field

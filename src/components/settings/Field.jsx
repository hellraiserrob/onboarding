import React, { Component } from 'react'
import shortid from 'shortid' 

class Field extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.isChecked = this.isChecked.bind(this)
        this.setDirty = this.setDirty.bind(this)


        this.ondragenter = this.ondragenter.bind(this)
        this.ondragleave = this.ondragleave.bind(this)
        this.ondrop = this.ondrop.bind(this)
        
        this.toggleHelp = this.toggleHelp.bind(this)

        this.state = {
            pristine: true,
            uploadStyle: {}
        }
    }

    

    handleChange(e){

        let txt = e.target.value

        this.setDirty();
        this.save(txt)
        
    }

    save(txt){

        let { serviceId, settingsId} = this.props
        let fieldId = this.props.field.id

        this.props.setField(serviceId, settingsId, fieldId, txt)
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


    ondragenter(e){
        e.stopPropagation();
        e.preventDefault();

        this.highlightUpload()
        
    }

    ondragleave(e){
        e.stopPropagation();
        e.preventDefault();

        this.resetUpload()
        
    }

    ondragover(e){
        e.stopPropagation();
        e.preventDefault();

    }

    ondrop(e){
        e.stopPropagation();
        e.preventDefault();

        let txt = e.dataTransfer.files[0].name

        this.save(txt)
        this.resetUpload()
    }

    resetUpload(){
        this.setState({
            uploadStyle: {
                borderColor: '#ccc',
                color: '#999'
            }
        })
    }

    highlightUpload(){
        this.setState({
            uploadStyle: {
                borderColor: '#000',
                color: '#333'
            }
        })
    }


    toggleHelp(e){

        e.preventDefault();

        let showHelp = this.state.showHelp

        this.setState({
            showHelp: !showHelp
        })

    }

    render() {

        let { field } = this.props

        return (
            <div className="mb20">
                
                <label>
                    {field.label} {field.isRequired && <em className="required"></em>}
                </label>

                {field.type === 'file' &&

                    <div>
                    
                        <div onDrop={this.ondrop}
                            onDragOver={this.ondragover}
                            onDragEnter={this.ondragenter}
                            onDragLeave={this.ondragleave}
                            className="upload mb10"
                            style={this.state.uploadStyle}
                            >
                            Drag in a file here    

                            <div className="alert__plus"></div>
                        </div>

                        

                        <div>
                            <a href="#"><small>{field.value}</small></a>
                        </div>

                    </div>

                }


                {(field.type === 'text' || field.type === 'number') &&
                    <input placeholder={field.placeholder} type={field.type} value={field.value} className="text-field"  onChange={this.handleChange} onBlur={this.setDirty} />
                }

                
                {field.type === 'radio' &&

                    field.options.map((option, index) =>  {

                        let checked = this.isChecked(field, option)

                        return <label className="radio" key={shortid.generate()}>
                            <input checked={checked} name={field.label} type="radio" onChange={this.handleChange} value={option.value} /> {option.label}
                        </label>

                    }
                    )
                }

                {field.type === 'select' &&
                    <div className="relative">
                        <div className="select-field__arrow">
                            <div className="fa fa-caret-down"></div>
                        </div>
                        <select value={field.value} className="select-field" onBlur={this.setDirty} onChange={this.handleChange}>
                            {field.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                }

                {(field.isRequired && !this.state.pristine) && (field.value.length === 0 || field.value === '-1') &&
                    <div className="error">{field.label} is a required field</div>
                }

                {/*field.help &&
                    <small className="help">{field.help}</small>
                */}

                {field.help &&
                    <div className="pt10">
                        {this.state.showHelp &&
                            <div className="mb10">
                                <small className="help">{field.help}</small>
                                <a href="#" onClick={this.toggleHelp} className=""><small>Hide help</small></a>
                            </div>
                        }

                        {!this.state.showHelp &&
                            <a href="#" onClick={this.toggleHelp} className=""><small>Show help</small></a>
                        }

                        

                    </div>
                }

                
            </div>
        )
    }
}



export default Field

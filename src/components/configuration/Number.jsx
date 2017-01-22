import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Number extends Component {

    shouldComponentUpdate(nextProps){
        
        if(nextProps.percent === this.props.percent){
            return false
        }

        return true
    }

    componentWillUpdate(){
        window.setTimeout(() => {
            ReactDOM.findDOMNode(this).classList.add('bounce');
        }, this.props.delay)
    }
    
    componentDidUpdate(){
        
        window.setTimeout(() => {
            ReactDOM.findDOMNode(this).classList.remove('bounce');
        }, 1000)


    }

    render() {

        const { percent } = this.props

        return (
            <h1 className="mb10 animated">{percent}%</h1>
        )
    }
}

export default Number
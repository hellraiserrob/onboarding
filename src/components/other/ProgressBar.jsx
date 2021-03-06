import React, { Component } from 'react'

class ProgressBar extends Component {

    render() {

        let { percent } = this.props

        if(percent === 0){
            percent = 2
        }

        let style = {
            width: `${percent}%`
        }

        return (
            <div className="progress">
                
                <div className="bar" style={style}></div>
                
            </div>
        )
    }
}



export default ProgressBar

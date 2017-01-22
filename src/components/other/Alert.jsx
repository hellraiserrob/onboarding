import React from 'react'

const Alert = ({children}) => {
    return (
        <div className="alert mb20 animated bounce">{children}</div>
    )
}

export default Alert
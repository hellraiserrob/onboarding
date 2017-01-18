import React from 'react'
import { Link } from 'react-router'

const NoMatch = () => {
    return (
        <div>
            <h1>404</h1>
            <p>No path could be found for this</p>
            <Link to="/">Start Again</Link>
        </div>
    )
}

export default NoMatch
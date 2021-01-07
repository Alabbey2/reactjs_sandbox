import React from 'react'
import {Link} from 'react-router-dom';

function Nothing() {
    return (
        <div>
            There is nothing here to see!
            <Link className="nothing-link" to="/">Go home please</Link>
        </div>
    )
}

export default Nothing

import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <Link to="/signin"><h1 className="welcome-page"> Welcome to Git App </h1></Link>
        </div>
    );
};

export default PageNotFound

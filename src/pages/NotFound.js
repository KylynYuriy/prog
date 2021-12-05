import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <div>
            This page not found. Go <Link to="/"> Home</Link>
        </div>
    );
};



export default NotFound;
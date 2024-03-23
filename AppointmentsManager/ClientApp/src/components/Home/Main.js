import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login';
import Register from '../../Register';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Home Page agg</h1>
            <p>This is the main entry point of your application.</p>
            <Link to="/login">Login</Link>
            <br></br>
            <br></br>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default HomePage;

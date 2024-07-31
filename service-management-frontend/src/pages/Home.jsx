import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Vehicle Service Management System</h1>
            <nav>
                <ul>
                    <li><Link to="/components">Components</Link></li>
                    <li><Link to="/vehicles">Vehicles</Link></li>
                    <li><Link to="/issues">Issues</Link></li>
                    <li><Link to="/calculateprice">Calculate Price</Link></li>
                    <li><Link to="/revenue">Revenue Graphs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;

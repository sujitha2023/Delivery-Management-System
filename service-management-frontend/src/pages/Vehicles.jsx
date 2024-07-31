import React from 'react';
import VehicleForm from '../components/VehicleForm';

const Vehicles = () => {

    const headingStyle = {
        marginLeft:'35rem'
    };

    return (
        <div>
            <h2 style={headingStyle}>Vehicles</h2>
            <VehicleForm />
        </div>
    );
};

export default Vehicles;

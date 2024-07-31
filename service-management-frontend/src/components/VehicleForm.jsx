import React, { useState } from 'react';
import { createVehicle } from '../api';

const VehicleForm = () => {
    const [licensePlate, setLicensePlate] = useState('');
    const [vehicle_model, setModel] = useState('');
    const [vehicle_owner, setOwner] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createVehicle({ license_plate: licensePlate, vehicle_model, vehicle_owner });
            setMessage('Vehicle registered successfully');
            setLicensePlate('');
            setModel('');
            setOwner('');
        } catch (error) {
            setMessage('Error registering vehicle');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Vehicle</h2>
            <div>
                <label>License Plate:</label>
                <input type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} required />
            </div>
            <div>
                <label>Vehicle Model:</label>
                <input type="text" value={vehicle_model} onChange={(e) => setModel(e.target.value)} required />
            </div>
            <div>
                <label>Vehicle Owner:</label>
                <input type="text" value={vehicle_owner} onChange={(e) => setOwner(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default VehicleForm;

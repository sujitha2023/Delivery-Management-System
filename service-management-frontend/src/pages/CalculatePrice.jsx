import React, { useState } from 'react';
import axios from 'axios';

const CalculatePrice = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [totalPrice, setTotalPrice] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        axios.post('http://localhost:8000/api/calculate-final-price/', { vehicle_id: vehicleId })
            .then(response => {
                setTotalPrice(response.data.total_price);
            })
            .catch(err => {
                setError('Error calculating the price');
                console.error(err);
            });
    };

    return (
        <div>
            <h2>Calculate Final Price</h2>
            <input
                type="text"
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                placeholder="Vehicle ID"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {totalPrice !== null && <p>Total Price: ₹{totalPrice}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CalculatePrice;

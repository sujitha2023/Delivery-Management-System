import React, { useState, useEffect } from 'react';
import { getVehicles, getComponents, createIssue } from '../api';

const IssueForm = () => {
    const [vehicles, setVehicles] = useState([]);
    const [components, setComponents] = useState([]);
    const [vehicle, setVehicle] = useState('');
    const [component, setComponent] = useState('');
    const [description, setDescription] = useState('');
    const [repairPrice, setRepairPrice] = useState('');
    const [isRepair, setIsRepair] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehiclesResponse = await getVehicles();
                const componentsResponse = await getComponents();
                console.log('Vehicles:', vehiclesResponse.data);
                console.log('Components:', componentsResponse.data);
                setVehicles(vehiclesResponse.data);
                setComponents(componentsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createIssue({
                vehicle,
                component,
                description,
                repair_price: repairPrice,
                is_repair: isRepair
            });
            setMessage('Issue registered successfully');
            setVehicle('');
            setComponent('');
            setDescription('');
            setRepairPrice('');
            setIsRepair(true);
        } catch (error) {
            setMessage('Error registering issue');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Issue</h2>
            <div>
                <label>Vehicle:</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} required>
                    <option value="">Select Vehicle</option>
                    {vehicles.map((v) => (
                        <option key={v.id} value={v.id}>{v.model} ({v.license_plate})</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Component:</label>
                <select value={component} onChange={(e) => setComponent(e.target.value)} required>
                    <option value="">Select Component</option>
                    {components.length ? (
                        components.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))
                    ) : (
                        <option value="">No components available</option>
                    )}
                </select>
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Repair Price:</label>
                <input type="number" value={repairPrice} onChange={(e) => setRepairPrice(e.target.value)} />
            </div>
            <div>
                <label>Repair:</label>
                <input type="checkbox" checked={isRepair} onChange={(e) => setIsRepair(e.target.checked)} />
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default IssueForm;

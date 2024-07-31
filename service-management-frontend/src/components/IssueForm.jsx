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
            const vehiclesResponse = await getVehicles();
            const componentsResponse = await getComponents();
            setVehicles(vehiclesResponse.data);
            setComponents(componentsResponse.data);
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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: '-10rem',
        marginLeft:"30rem"
    };

    const inputStyle = {
        margin: '10px 0',
        color:'black !important',
        padding:'0.3rem'
    };

    const decStyle = {
        margin: '0px',
        color:'black !important'
    };
    const labelStyle = {
        padding:'0.3rem'

    };


    return (
        <div style={formStyle}>
            <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
                <h2>Register Issue</h2>
                <div>
                    <label style={labelStyle}>Vehicle:</label>
                    <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} required style={inputStyle}>
                        <option value="">Select Vehicle</option>
                        {vehicles.map((v) => (
                            <option key={v.id} value={v.id} style={{ color: 'black' }}>
                                {v.model} ({v.license_plate})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={labelStyle}>Component:</label>
                    <select value={component} onChange={(e) => setComponent(e.target.value)} required style={inputStyle}>
                        <option value="">Select Component</option>
                        {components.map((c) => (
                            <option key={c.id} value={c.id} style={{ color: 'black !important' }}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={labelStyle}>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={decStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Repair Price:</label>
                    <input type="number" value={repairPrice} onChange={(e) => setRepairPrice(e.target.value)} style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Repair:</label>
                    <input type="checkbox" checked={isRepair} onChange={(e) => setIsRepair(e.target.checked)} style={inputStyle} />
                </div>
                <button type="submit" style={inputStyle}>Submit</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default IssueForm;

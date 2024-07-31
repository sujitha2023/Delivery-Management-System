import React, { useState } from 'react';
import { createComponent } from '../api';

const ComponentForm = () => {
    const [component_name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [isNew, setIsNew] = useState(true);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createComponent({ component_name, price, is_new: isNew });
            setMessage('Component registered successfully');
            setName('');
            setPrice('');
            setIsNew(true);
        } catch (error) {
            setMessage('Error registering component');
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

    const labelStyle = {
        padding:'0.3rem'

    };

    return (
        <div style={formStyle}>
        <form onSubmit={handleSubmit}>
            <h2>Register Component</h2>
            <div>
                <label style={labelStyle}>Component Name:</label>
                <input type="text" value={component_name} onChange={(e) => setName(e.target.value)} required style={inputStyle}/>
            </div>
            <div>
                <label style={labelStyle}>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required style={inputStyle}/>
            </div>
            <div>
                <label style={labelStyle}>New Component:</label>
                <input type="checkbox" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} style={inputStyle}/>
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
        </div>
    );
};

export default ComponentForm;

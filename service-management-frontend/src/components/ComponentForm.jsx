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

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Component</h2>
            <div>
                <label>Component Name:</label>
                <input type="text" value={component_name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>New Component:</label>
                <input type="checkbox" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />
            </div>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ComponentForm;

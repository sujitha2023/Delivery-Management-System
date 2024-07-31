import React from 'react';
import ComponentForm from '../components/ComponentForm';
const headingStyle = {
    marginLeft:'35rem'
};
const Components = () => {
    return (
        <div>
            <h2 style={headingStyle}>Components</h2>
            <ComponentForm />
        </div>
    );
};

export default Components;

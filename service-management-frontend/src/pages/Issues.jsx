import React from 'react';
import IssueForm from '../components/IssueForm';

const headingStyle = {
    marginLeft:'37rem'
};
const Issues = () => {
    return (
        <div>
            <h2 style={headingStyle}>Issues</h2>
            <IssueForm />
        </div>
    );
};

export default Issues;

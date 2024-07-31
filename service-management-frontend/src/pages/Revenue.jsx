import React from 'react';
import RevenueChart from '../components/RevenueChart';
import RevenueBarChart from '../components/RevenueBarChart';


// const Revenue = () => (
//     <div>
//         <h1>Revenue Dashboard</h1>
//         <RevenueChart period="daily" />
//         <RevenueChart period="monthly" />
//         <RevenueChart period="yearly" />
//     </div>
// );
const headingStyle = {
    marginLeft:'30rem'
};
const heStyle = {
    marginLeft:'40rem'
};
const Revenue = () => (
    <div>
        <h1 style={headingStyle}>Revenue Dashboard</h1>
        <h2 style={heStyle}>Daily</h2>
        <RevenueBarChart period="daily" />
        <h2 style={heStyle}>Monthly</h2>
        <RevenueBarChart period="monthly" />
        <h2 style={heStyle}>Yearly</h2>
        <RevenueBarChart period="yearly" />
    </div>
);

export default Revenue;

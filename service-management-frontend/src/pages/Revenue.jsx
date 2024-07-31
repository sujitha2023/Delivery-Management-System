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

const Revenue = () => (
    <div>
        <h1>Revenue Dashboard</h1>
        <RevenueBarChart period="daily" />
        <RevenueBarChart period="monthly" />
        <RevenueBarChart period="yearly" />
    </div>
);

export default Revenue;

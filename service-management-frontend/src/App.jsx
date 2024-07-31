import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import Vehicles from './pages/Vehicles';
import Issues from './pages/Issues';
import Revenue from './pages/Revenue';
import CalculatePrice from './pages/CalculatePrice';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/components" element={<Components />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/calculateprice" element={<CalculatePrice/>} />
                <Route path="/revenue" element={<Revenue />} />
            </Routes>
        </Router>
    );
};

export default App;

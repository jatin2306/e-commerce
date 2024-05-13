import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllComponents from './AllComponents';
import Login from './Login';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllComponents />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default Routing
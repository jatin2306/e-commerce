import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllComponents from './AllComponents';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AllComponents />} />
            </Routes>
        </Router>
    )
}

export default Routing
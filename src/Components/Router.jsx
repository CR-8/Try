import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Change from '../Pages/Change';
import Login from '../Pages/Loginpage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Home />} />
                <Route path="/integration" element={<Home />} />
                <Route path="/pricing" element={<Home />} />
                <Route path="/bloglist" element={<Blog />} />
                <Route path="/changelog" element={<Change />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;

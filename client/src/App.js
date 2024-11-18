import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Admin from './pages/Admin';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
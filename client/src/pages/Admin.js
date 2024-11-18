// Admin.js
import React, { useState } from 'react';

const Admin = () => {
    const [match, setMatch] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save match details
        console.log(`Match: ${match}, Date: ${date}`);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Match:</label>
                    <input 
                        type="text" 
                        value={match} 
                        onChange={(e) => setMatch(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Add Match</button>
            </form>
        </div>
    );
};

export default Admin;
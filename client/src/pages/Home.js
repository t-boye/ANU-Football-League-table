// Home.js
import React from 'react';
import LeagueTable from '../components/LeagueTable';
import TopScorers from '../components/TopScorers';
import Players from '../components/Players';
import TeamProfile from '../components/TeamProfile';
import ScoreInput from '../components/ScoreInput';

const Home = () => {
    return (
        <div className="flex p-4">
            <div className="flex-1 mr-4">
                <h1 className="text-3xl font-bold mb-4">Welcome to COAL CITY BALLERS ❤️</h1>
                <p className="mb-4">Where are the female football lovers! Indicate here with your favorite football club!</p>
                
                <h2 className="text-2xl font-semibold mb-2">Upcoming Matches</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Match 1: Chelsea vs Liverpool - Date: 20th Nov 2024</li>
                    <li>Match 2: Manchester United vs Real Madrid - Date: 22nd Nov 2024</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-2">Favorite Clubs</h2>
                <p>Share your favorite club with us!</p>

                {/* Score Input Component */}
                <ScoreInput />

                {/* League Table Component */}
                <LeagueTable />

                {/* Top Scorers Component */}
                <TopScorers />

                {/* Players Component */}
                <Players />

                {/* Team Profile Component */}
                <TeamProfile />
            </div>
            <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Advertisements</h2>
                <div className="bg-white p-2 mb-2 rounded border border-gray-300">Ad 1: Buy Football Gear!</div>
                <div className="bg-white p-2 mb-2 rounded border border-gray-300">Ad 2: Join Our Football Academy!</div>
                <div className="bg-white p-2 mb-2 rounded border border-gray-300">Ad 3: Upcoming Football Events!</div>
            </div>
        </div>
    );
};

export default Home;
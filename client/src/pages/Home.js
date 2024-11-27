// Home.js
import React from 'react';
import Hero from '../components/Hero'; // Import the Hero component
import UpcomingMatches from '../components/UpcomingMatches'; // Import the UpcomingMatches component
import LeagueTable from '../components/LeagueTable';
import TopScorers from '../components/TopScorers';
import Players from '../components/Players';
import TeamProfile from '../components/TeamProfile';
import ScoreInput from '../components/ScoreInput';
import Advertisements from '../components/Advertisements'; // New Advertisements component

const Home = () => {
    return (
        <div className="flex p-4">
            <div className="flex-1 mr-4">
                {/* Hero Component */}
                <Hero />

                {/* Upcoming Matches Component */}
                <UpcomingMatches />


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
            <div className="w-1/4">
                {/* Advertisements Component */}
                <Advertisements />
            </div>
        </div>
    );
};

export default Home;
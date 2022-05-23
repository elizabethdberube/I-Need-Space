import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';

import Mission from './pages/Mission.js';
import Practice from './pages/Practice.js';
import Curiosity from './pages/Curiosity';
import Oppurtunity from './pages/Oppurtunity';
import Anotherpage from './pages/Anotherpage';






export default function Project() {
    const [currentPage, setCurrentPage] = useState('Rover');
    // method for checking current page and rendering corresponding section
    const renderPage = () => {
        if (currentPage === 'Curiosity') {
            return (<div>
                <Header />
                <Curiosity />

            </div>
            );
        }
        if (currentPage === 'Mission') {
            return (<div>
                <Header />
                <Mission />

            </div>
            );
        }
        if (currentPage === 'Practice') {
            return (<div>
                <Header />
                <Practice />

            </div>
            );
        }
        if (currentPage === 'Anotherpage') {
            return (<div>
                <Header />
                <Anotherpage />

            </div>
            );
        }
        return (<div>
            <Header />
            <Oppurtunity />

        </div>
        );

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
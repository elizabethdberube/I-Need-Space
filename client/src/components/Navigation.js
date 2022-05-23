import React from 'react';

// navbar assigning section to anchor tag
function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className='nav-bar'>
            <div>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <a href="oppurtunity"
                            onClick={() => handlePageChange('Oppurtunity')}
                            className={currentPage === 'Oppurtunity' ? 'nav-link active' : 'nav-link'}
                        >Oppurtunity</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#mission"
                            onClick={() => handlePageChange('Mission')}
                            className={currentPage === 'Mission' ? 'nav-link active' : 'nav-link'}
                        >Mission</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#curiosity"
                            onClick={() => handlePageChange('Curiosity')}
                            className={currentPage === 'Curiosity' ? 'nav-link active' : 'nav-link'}
                        >Curiosity</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#practice"
                            onClick={() => handlePageChange('Practice')}
                            className={currentPage === 'Practice' ? 'nav-link active' : 'nav-link'}
                        >Practice</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#anotherpage"
                            onClick={() => handlePageChange('Anotherpage')}
                            className={currentPage === 'Anotherpage' ? 'nav-link active' : 'nav-link'}
                        >Another page</a>
                    </li>
                    {/* <li className='nav-item'>
                        <a href="#curiosity"
                            onClick={() => handlePageChange('Curiosity')}
                            className={currentPage === 'Curiosity' ? 'nav-link active' : 'nav-link'}
                        >OppurtunityNAVCAM</a>
                    </li> */}

                </ul>
            </div>
        </nav>


    );
}


export default Navigation;

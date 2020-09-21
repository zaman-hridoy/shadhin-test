import React from 'react';

const CollapseMenu = () => {
    return (
        <ul className="collapse-mnu">
            <li data-toggle="collapse" data-target="#explore" aria-expanded="true" aria-controls="explore">Explore</li>
            <li data-toggle="collapse" data-target="#favorites" aria-expanded="false" aria-controls="favorites">Favorites</li>
            <li data-toggle="collapse" data-target="#watch-later" aria-expanded="false" aria-controls="watch-later">Watch Later</li>
            <li data-toggle="collapse" data-target="#history" aria-expanded="false" aria-controls="history">History</li>
        </ul>
    );
}

export default CollapseMenu;

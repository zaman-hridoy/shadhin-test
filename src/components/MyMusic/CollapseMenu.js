import React from 'react';

const CollapseMenu = () => {
    return (
        <ul className="collapse-mnu">
            <li data-toggle="collapse" data-target="#highlights" aria-expanded="true" aria-controls="highlights">Highlights</li>
            <li data-toggle="collapse" data-target="#favorites" aria-expanded="false" aria-controls="favorites">Favorites</li>
            <li data-toggle="collapse" data-target="#playlists" aria-expanded="false" aria-controls="playlists">Playlists</li>
            <li data-toggle="collapse" data-target="#songs" aria-expanded="false" aria-controls="songs">Songs</li>
            <li data-toggle="collapse" data-target="#albums" aria-expanded="false" aria-controls="albums">Albums</li>
            <li data-toggle="collapse" data-target="#artists" aria-expanded="false" aria-controls="artists">Artists</li>
        </ul>
    );
}

export default CollapseMenu;

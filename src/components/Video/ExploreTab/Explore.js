import React from 'react';
import TrendingVideos from './TrendingVideos';
import NewMusicVideo from './NewMusicVideo';
import RecentlyWatched from './RecentlyWatched';
import MovieSongs from './MovieSongs';
import ArtistSpecial from './ArtistSpecial';

const Explore = () => {
    return (
        <div className="collapse show" id="explore" data-parent="#collapse-area">
            {/* recently watched */}
            <RecentlyWatched />

            {/* New Music Video */}
            <NewMusicVideo />

            {/* Trending Videos */}
            <TrendingVideos />

            {/* Movie songs */}
            <MovieSongs />

            {/* Artist Special */}
            <ArtistSpecial />
        </div>
    );
}

export default Explore;

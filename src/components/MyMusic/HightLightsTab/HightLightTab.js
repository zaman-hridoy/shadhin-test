import React from 'react';
import Artists from './Artists';
import PlayList from './PlayList';
import RecentlyPlayed from './RecentlyPlayed';
import Songs from './Songs';

const HightLightTab = () => {
    return (
        <div className="collapse show" id="highlights" data-parent="#collapse-area">
            {/* recently palyed */}
            <RecentlyPlayed />

            {/* play list */}
            <PlayList />

            {/* artist */}
            <Artists />

            {/* songs */}
            <Songs />
        </div>
    );
}

export default HightLightTab;

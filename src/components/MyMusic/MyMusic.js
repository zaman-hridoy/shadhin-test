import React, { Component, Fragment } from 'react';
import {  appendScript, removeScript} from '../../utils/appendScripts.js';
// components
import CollapseMenu from './CollapseMenu.js';
import Favourites from './Favourites/Favourites.js';
import HightLightTab from './HightLightsTab/HightLightTab.js';
import PlayLists from './PlayLists/PlayLists.js';
import SongsTab from './SongsTab/SongsTab.js';
import AlbumsTab from './AlbumsTab/AlbumsTab.js';
import ArtistsTab from './ArtistsTab/ArtistsTab.js';

class MyMusic extends Component {
    componentDidMount() {
        appendScript('/js/main.js');
    }
    componentWillUnmount() {
        removeScript('/js/main.js');
    }
    render() {
        return (
            <Fragment>
                <div className="page-heading music-highlights">
                    <h3 className="heading">My Music</h3>
                </div>
                <div id="collapse-area">
                    {/* collapse menu */}
                    <CollapseMenu />

                    <div className="collapse-contents">
                        {/* Collapse highLights */}
                        <HightLightTab />

                        {/* Favourites Tab*/}
                        <Favourites />

                        {/* Play list Tab */}
                        <PlayLists />

                        {/* Songs Tab */}
                        <SongsTab />

                        {/* Albums Tab */}
                        <AlbumsTab />
                        
                        {/* Artists Tab */}
                        <ArtistsTab />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MyMusic;
import React, { Component, Fragment } from 'react'
import { appendScript, removeScript } from '../../utils/appendScripts.js';

// components
import CollapseMenu from './CollapseMenu'
import Explore from './ExploreTab/Explore'
import Favourites from './Favourites/Favourites'
import History from './History/History'
import PlayLists from './PlayLists/PlayLists'
import WatchLater from './WatchLater/WatchLater'

export default class Video extends Component {
    componentDidMount() {
        appendScript('/js/mainforVideo.js');
    }
    componentWillUnmount() {
        removeScript('/js/mainforVideo.js');
    }
    render() {
        return (
            <Fragment>
                <div className="page-heading video-explore">
                    <h3 className="heading">Video</h3>
                </div>
                <div id="collapse-area">
                    {/* collapse menu */}
                    <CollapseMenu />

                    <div className="collapse-contents">
                        {/* explore tab */}
                        <Explore />

                        {/* Favourites tab */}
                        <Favourites />

                        {/* Play Lists */}
                        <PlayLists />

                        {/* Watch Later */}
                        <WatchLater />

                        {/* History */}
                        <History />
                    </div>
                </div>
            </Fragment>
        )
    }
}

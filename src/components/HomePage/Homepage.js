import React, { Component, Fragment } from 'react';
import { appendScript, removeScript } from '../../utils/appendScripts.js';
// components
import TopPicksAndMadeForYou from './TopPicksAndMadeForYou.js';
import PopularArtistAndRadioRow from './PopularArtistAndRadioRow.js';
import CommonRow from './CommonRow.js';
import PopularVideos from './PopularVideos.js';
import TrendingVideos from './TrendingVideos.js';
import Footer from '../Footer/Footer.js';

class Homepage extends Component {
    componentDidMount() {
        appendScript('/js/main.js');
    }
    componentWillUnmount() {
        removeScript('/js/main.js');
    }
    render() {
        return (
            <Fragment>
                {/* user info show only on mobile device */}
                <div className="user-info-mobile d-block d-md-none">
                    <h6 className="title2">Hi there, <span>John!</span></h6>
                    <p className="f14">Good Morning, Listen Free Music</p>
                </div>

                {/* body-content */}
                <div className="body-content">
                    <TopPicksAndMadeForYou 
                        title="Top Picks"
                        carouselId="carousel1"
                    />
                    <PopularArtistAndRadioRow 
                        title="Popular Artist"
                        carouselId="carousel2"
                    />
                    <CommonRow 
                        title="Recently Played"
                        carouselId="carousel3"
                    />
                    <CommonRow 
                        title="Featured Playlist"
                        carouselId="carousel4"
                    />
                    <CommonRow 
                        title="Popular Playlist"
                        carouselId="carousel5"
                    />
                    <TopPicksAndMadeForYou 
                        title="Made for you"
                        carouselId="carousel1b"
                    />
                    <CommonRow 
                        title="Trending Now"
                        carouselId="carousel7"
                    />
                    <PopularVideos 
                        title="Popupar Videos"
                        carouselId="carousel8"
                    />
                    <PopularArtistAndRadioRow 
                        title="Radio"
                        carouselId="carousel9"
                    />
                    <TrendingVideos 
                        title="Trending Videos"
                        carouselId="carousel10"
                    />
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Homepage;
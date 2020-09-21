import React from 'react';

const RecentlyPlayed = () => {
    return (
        <div className="slider-recently-played">
            <h3 className="heading">Recently Played</h3>
            <div className="owl-carousel" id="carousel2">
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed1.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Cats and music</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed2.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Music name</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed3.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Music name</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed4.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Music name</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed2.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Music name</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href="#!">
                    <img src="/img/recentlyplayed2.jpg" alt="" />
                    <div className="carousel-desc">
                        <h4>Music name</h4>
                        <p>Artist name goes here</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RecentlyPlayed;

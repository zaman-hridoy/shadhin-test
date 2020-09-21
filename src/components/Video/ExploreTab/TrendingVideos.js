import React from 'react';

const TrendingVideos = () => {
    return (
        <div className="video-icon">
            <h3 className="heading">Trending Videos</h3>
            <div className="owl-carousel" id="carousel10">
            <div>
                <a href="#!">
                <img src="/img/icon-play.png" className="playicon" alt="" />
                <img src="/img/trendingvideo3.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Cats and music</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/icon-play.png" className="playicon" alt="" />
                <img src="/img/trendingvideo2.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Music name</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/icon-play.png" className="playicon" alt="" />
                <img src="/img/trendingvideo1.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Music name</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/icon-play.png" className="playicon" alt="" />
                <img src="/img/trendingvideo1.jpg" alt="" />
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

export default TrendingVideos;

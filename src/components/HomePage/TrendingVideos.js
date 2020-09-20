import React from 'react';

const TrendingVideos = ({ title, carouselId }) => {
    return (
        <div className="trending-videos">
            <h3 className="heading">{title}</h3>
            <div className="owl-carousel" id={carouselId}>
                <div><img src="img/trendingvideo1.jpg" alt="Trending Videos" /></div>
                <div><img src="img/trendingvideo2.jpg" alt="Trending Videos" /></div>
                <div><img src="img/trendingvideo2.jpg" alt="Trending Videos" /></div>
            </div>
        </div>
    );
}

export default TrendingVideos;

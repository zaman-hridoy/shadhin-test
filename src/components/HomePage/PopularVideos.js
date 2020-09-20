import React from 'react';

const PopularVideos = ({ title, carouselId }) => {
    return (
        <div className="popupar-videos">
              <h3 className="heading">{title}</h3>
              <div className="owl-carousel" id={carouselId}>
                <div>
                  <a href="#!">
                    <img src="img/pvideo1.jpg" alt="popular videos" />
                    <div className="carousel-desc">
                      <h4>Music video name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                  {/* <!-- 
                   <video controls poster="img/pvideo1.jpg">
                    <source src="videos/video1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video> --> */}
                </div>
                <div>
                  <a href="#!">
                    <img src="img/pvideo2.jpg" alt="popular videos" />
                    <div className="carousel-desc">
                      <h4>Music video name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/pvideo3.jpg" alt="popular videos" />
                    <div className="carousel-desc">
                      <h4>Music video name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/pvideo4.jpg" alt="popular videos" />
                    <div className="carousel-desc">
                      <h4>Music video name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/pvideo2.jpg" alt="popular videos" />
                    <div className="carousel-desc">
                      <h4>Music video name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
              </div>
        </div>
    );
}

export default PopularVideos;

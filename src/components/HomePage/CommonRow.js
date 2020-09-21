import React from 'react';

const CommonRow = ({ title, carouselId }) => {
    return (
        <div className="recently-played">
              <h3 className="heading">{title}</h3>
              <div className="owl-carousel" id={carouselId}>
                <div>
                  <a href="#!">
                    <img src="/img/recentlyplayed1.jpg" alt="recently played" />
                    <div className="carousel-desc">
                      <h4>Cats and music</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/recentlyplayed2.jpg" alt="recently played" />
                    <div className="carousel-desc">
                      <h4>Music name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/recentlyplayed3.jpg" alt="recently played" />
                    <div className="carousel-desc">
                      <h4>Music name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/recentlyplayed4.jpg" alt="recently played" />
                    <div className="carousel-desc">
                      <h4>Music name</h4>
                      <p>Artist name goes here</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/recentlyplayed2.jpg" alt="recently played" />
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

export default CommonRow;

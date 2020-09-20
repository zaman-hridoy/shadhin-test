import React from 'react';

const PopularArtistAndRadioRow = ({ title, carouselId }) => {
    return (
        <div className="popular-artist">
              <h3 className="heading">{title}</h3>
              <div className="owl-carousel" id={carouselId}>
                <div>
                  <a href="#!">
                    <img src="img/artist1.jpg" alt="artist" />
                    <div className="carousel-desc">
                      <h4>Hridoy Khan</h4>
                      <p><span>0000</span> fans</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/artist2.jpg" alt="artist" />
                    <div className="carousel-desc">
                      <h4>Asif</h4>
                      <p><span>0000</span> fans</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/artist3.jpg" alt="artist" />
                    <div className="carousel-desc">
                      <h4>Habib Wahid</h4>
                      <p><span>0000</span> fans</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/artist4.jpg" alt="artist" />
                    <div className="carousel-desc">
                      <h4>Imran</h4>
                      <p><span>0000</span> fans</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="img/artist2.jpg" alt="artist" />
                    <div className="carousel-desc">
                      <h4>Asif</h4>
                      <p><span>0000</span> fans</p>
                    </div>
                  </a>
                </div>
              </div>
        </div>
    );
}

export default PopularArtistAndRadioRow;

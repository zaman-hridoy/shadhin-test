import React from 'react';

const TopPicksAndMadeForYou = ({ title, carouselId }) => {
    return (
        <div className="top-picks">
              <h3 className="heading">{title}</h3>
              <div className="owl-carousel" id={carouselId}>
                <div>
                  <a href="#!">
                    <img src="/img/TopPick1.jpg" alt="Top Pick" />
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/TopPick2.jpg" alt="Top Pick" />
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/TopPick3.jpg" alt="Top Pick" />
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/TopPick1.jpg" alt="Top Pick" />
                  </a>
                </div>
                <div>
                  <a href="#!">
                    <img src="/img/TopPick2.jpg" alt="Top Pick" />
                  </a>
                </div>
              </div>
        </div>
    );
}

export default TopPicksAndMadeForYou;

import React from 'react';

const PlayList = () => {
    return (
        <div className="recently-played">
            <h3 className="heading">Playlists</h3>
            <div className="owl-carousel" id="carousel3">
            <div className="createplaylist-parent">
            <a href="#!" className="createplaylist">
                <img src="/img/addplaylist-icon1.jpg" alt="" />
                <div className="carousel-desc">
                <h4>Create playlist</h4>
                </div>
            </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/pplaylist1.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Cats and music</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/pplaylist2.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Music name</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/pplaylist3.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Music name</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/pplaylist2.jpg" alt="" />
                <div className="carousel-desc">
                    <h4>Music name</h4>
                    <p>Artist name goes here</p>
                </div>
                </a>
            </div>
            <div>
                <a href="#!">
                <img src="/img/pplaylist2.jpg" alt="" />
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

export default PlayList;

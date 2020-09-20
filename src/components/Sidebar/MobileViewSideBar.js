import React from 'react';

const MobileViewSideBar = () => {
    return (
        <div className="mobile-menu d-block d-md-none">
          <ul className="mobile-main-menu">
            <li><a href="index.html" className="active"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="#!"><i className="fa fa-play-circle-o"></i>Video</a></li>
            <li><a href="#!"><i className="fa fa-bullseye"></i>Podcast</a></li>
            <li><a href="#!"><i className="fa fa-music"></i>My Music</a></li>
            <li><a href="#!"><i className="fa fa-search"></i>Search</a></li>
          </ul>
        </div>
    );
}

export default MobileViewSideBar;

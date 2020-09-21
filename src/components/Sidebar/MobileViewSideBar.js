import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileViewSideBar = () => {
    return (
        <div className="mobile-menu d-block d-md-none">
          <ul className="mobile-main-menu">
            <li>
              {/* <a href="index.html" className="active"><i className="fa fa-home"></i>Home</a> */}
                    <NavLink exact to="/" activeClassName="active">
                        <i className="fa fa-home"></i> Home
                    </NavLink>
              </li>
            <li>
              {/* <a href="#!"><i className="fa fa-play-circle-o"></i>Video</a> */}
                  <NavLink exact to="/h/video-explore" activeClassName="active">
                      <i className="fa fa-play-circle-o"></i> Video
                  </NavLink>
            </li>
            <li>
              {/* <a href="#!"><i className="fa fa-bullseye"></i>Podcast</a> */}
                    <NavLink exact to="/h/podcast" activeClassName="active">
                        <i className="fa fa-bullseye"></i> Podcast
                    </NavLink>
              </li>
            <li>
              {/* <a href="#!"><i className="fa fa-music"></i>My Music</a> */}
                  <NavLink exact to="/h/my-music-highlight" activeClassName="active">
                      <i className="fa fa-music"></i> My Music
                  </NavLink>
            </li>
            <li><a href="#!"><i className="fa fa-search"></i>Search</a></li>
          </ul>
        </div>
    );
}

export default MobileViewSideBar;

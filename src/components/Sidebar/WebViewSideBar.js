import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const WebViewSideBar = () => {
    return (
        <div className="sidebar left-sidebar d-none d-md-block">
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo.png" alt="logo" />
                </Link>
            </div>
            <ul className="main-menu">
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <i className="fa fa-home"></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/h/my-music-highlight" activeClassName="active">
                        <i className="fa fa-music"></i> My Music
                    </NavLink>
                </li>
                <li>
                    {/* <a href="#!"><i className="fa fa-bullseye"></i> Podcast</a> */}
                    <NavLink exact to="/h/podcast" activeClassName="active">
                        <i className="fa fa-bullseye"></i> Podcast
                    </NavLink>
                </li>
                <li>
                    {/* <a href="#!"><i className="fa fa-play-circle-o"></i> Video</a> */}
                    <NavLink exact to="/h/video-explore" activeClassName="active">
                        <i className="fa fa-play-circle-o"></i> Video
                    </NavLink>
                </li>
            </ul>
            <div className="upgrade">
                <h3>Upgrade to Pro</h3>
                <p>Ad-free, unlimited offline downloads and create playlist</p>
                <a href="#!" className="waves-effect waves-light">Get Pro</a>
            </div>
            <div className="download">
                <h3>Download the App</h3>
                <a href="#!"><img src="/img/gp.png" alt="gp" /></a>
                <a href="#!"><img src="/img/as.png" alt="as" /></a>
            </div>
            <div style={{ paddingBottom: 220 }}></div>
        </div>
    );
}

export default WebViewSideBar;

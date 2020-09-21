import React, { Component, Fragment } from 'react';
import './Player.css';

class Player extends Component {
    render() {
        return (
            <Fragment>
                <div className="clearfix"></div>
                <div className="player">
                {/* <style type="text/css">
                    body{padding-bottom: 80px;}
                    @media(max-width: 767px){body{padding-bottom: 149px;}}
                </style> */}
                <div className="player-part ppart1">
                    <ul>
                        <li className=" d-block d-md-none"><img src="/img/icons/icon-shuffle.svg" alt="" /></li>
                        <li><img src="/img/icons/icon-play-backward.svg" alt="" /></li>
                        <li className="color"><img src="/img/icons/icon-mplay.svg" alt="" /></li>
                        <li className="color" style={{ display: 'none' }}><img src="/img/icons/icon-mpause.svg" alt="" /></li>
                        <li><img src="/img/icons/icon-play-forward.svg" alt="" /></li>
                        <li className="d-block d-md-none"><img src="/img/icons/icon-repeat.svg" alt="" /></li>
                    </ul>
                </div>
                <div className="player-part ppart2">
                    <ul className="pp2ul1">
                    <li><p>Bhalo Lage Na <span>- Hridoy Khan</span></p></li>
                    <li className="d-none d-md-block">
                        <ul>
                            <li><img src="/img/icons/icon-microphone.svg" alt="" /></li>
                            <li><img src="/img/icons/icon-heart.svg" alt="" /></li>
                            <li><img src="/img/icons/icon-plus.svg" alt="" /></li>
                        </ul>
                    </li>
                    </ul>
                    <ul className="pp2ul2">
                        <li className="time going-time">2:33</li>
                        <li className="progress"><span className="progress-time" style={{ width: '50%' }}></span></li>
                        <li className="time total-time">4:53</li>
                    </ul>
                </div>
                <div className="player-part ppart3">
                    <ul>
                        <li className="d-block d-md-none"><img src="/img/icons/icon-microphone.svg" alt="" /></li>
                        <li className="d-block d-md-none"><img src="/img/icons/icon-heart.svg" alt="" /></li>
                        <li className="d-block d-md-none"><img src="/img/icons/icon-plus.svg" alt="" /></li>
                        <li className="d-none d-md-block"><img src="/img/icons/icon-shuffle.svg" alt="" /></li>
                        <li className="d-none d-md-block"><img src="/img/icons/icon-repeat.svg" alt="" /></li>
                        <li><img src="/img/icons/icon-volume.svg" alt="" /></li>
                    <li className="d-none d-md-block">
                        <a href="home-player-queue.html"><img src="/img/artist1.jpg" alt="" />
                        <span>Queue</span></a>
                    </li>
                    </ul>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Player;

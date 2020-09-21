import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

// components
import WebViewSideBar from './components/Sidebar/WebViewSideBar.js'; // web view sidebar
import MobileViewSideBar from './components/Sidebar/MobileViewSideBar.js'; // mobile view navigation bar
import TopSearchWithUser from './components/TopSearch/TopSearchWithUser.js'; //Top search
// import Footer from './components/Footer/Footer.js'; // Footer section
import Homepage from './components/HomePage/Homepage.js'; // body content
import MyMusic from './components/MyMusic/MyMusic.js'; // My Music
import Video from './components/Video/Video.js';
import Podcast from './components/Podcast/Podcast.js'; // Podcast
// import HomePlayerQue from './components/HomePlayerQue/HomePlayerQue';
// import HomePlayerQueueSidebar from './components/HomePlayerQue/HomePlayerQueueSidebar.js';
// import Player from './components/Player/Player';

class App extends Component {
  // componentDidMount() {
  //   console.log('mounted')
  // }
  // componentDidUpdate() {
  //   console.log('update')
  // }
  render() {
    // const isQueue = this.props.location.pathname === '/home-player-queue';
    // console.log(isQueue)
    return (
      <Fragment>
        <div className="container-fluid">
            <section className="main-body">
                {/* side bar */}
                <WebViewSideBar />
                <MobileViewSideBar />
                {/* <HomePlayerQueueSidebar /> */}
                <div className="sidebar right-sidebar">
                    <TopSearchWithUser />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/h/my-music-highlight" component={MyMusic} />
                        <Route exact path="/h/video-explore" component={Video} />
                        <Route path="/h/podcast" component={Podcast} />
                        {/* <Route path="/home-player-queue" component={HomePlayerQue} /> */}
                    </Switch>
                </div>
            </section>
        </div>
        {/* {isQueue && <Player />} */}
      </Fragment>
    );
  }
}

export default withRouter(App);

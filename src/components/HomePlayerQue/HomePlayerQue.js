import React, { Component, Fragment } from 'react';
import { appendScript, removeScript } from '../../utils/appendScripts.js';
import HomePlayerQueueSidebar from './HomePlayerQueueSidebar.js';
import Player from '../Player/Player.js';

class HomePlayerQue extends Component {
    componentDidMount() {
        appendScript('/js/main.js');
        appendScript('/js/queuepagepopup.js');
    }
    componentWillUnmount() {
        removeScript('/js/main.js');
        removeScript('/js/queuepagepopup.js');
    }
    render() {
        return (
          <Fragment>
          <div className="container-fluid">
            <section className="main-body">
              {/* left side */}
              <HomePlayerQueueSidebar />
              {/* Right Side */}
              <div className="sidebar right-sidebar">
                <div className="top-part top-part2">
              <div className="p30 arrow-click">
                <div className="d-block d-md-none queue-heading">QUEUE</div>
                <a href="#!" className="ml-auto"><img src="/img/icon-collapse.svg" alt="" /></a>
              </div>
              <div className="p30 queue-list-top">
                <div><h4 className="queue-heading"><span className="d-none d-md-inline">Queue • </span> <span className="ophalf">20 tracks</span></h4></div>
                <div>
                  <a href="#!" className="popper waves-effect addto-playlist" data-toggle="popover">Add to playlist</a>
                  <div className="pop-content" style={{ minWidth: 360 }}>
                    <div className="d-flex popup-album">
                      <img src="/img/popup-album.jpg" alt="album" />
                      <div>
                        <h6 className="title2">Jani Ekdin</h6>
                        <p className="f14">Hridoy Khan</p>
                      </div>
                    </div>
                    <ul className="song-desc-reacts-pop1 addtoplaylist">
                      <li><a href="#!" className="popper2"><i><img src="/img/addplaylist-icon1.jpg" alt="" /></i> New playlist</a>
                        {/* <!-- add to playlist start--> */}
                        <div className="pop-content2">
                          <div className="d-flex popup-album">
                            <img src="/img/popup-album.jpg" alt="album" />
                            <div>
                              <h6 className="title2">Jani Ekdin</h6>
                              <p className="f14">Hridoy Khan</p>
                            </div>
                          </div>
                          <a href="#!" className="addtoplaylist-back popper2-close"><img src="/img/icons/icon-back.svg" alt="" /> Back</a>
                          <form className="create-playlist">
                            <input type="text" name="" placeholder="Playlist name" />
                            <button type="submit" className="btn">Create</button>
                          </form>
                        </div>
                        {/* <!-- add to playlist end--> */}
                      </li>
                      <li><a href="#!"><i><img src="/img/addplaylist-icon2.jpg" alt="" /></i> classNameical tracks</a></li>
                      <li><a href="#!"><i><img src="/img/addplaylist-icon2.jpg" alt="" /></i> Bangla band</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="profile-brdr d-none d-md-block"></div>
              <div className="queue-list">
                <ul className="songlist">
                  {/* <!-- song start --> */}
                  <li className="p30 active">
                    <div className="d-flex songlist-title">
                      <img src="/img/push.png" alt="song" />
                      <span>Bhalo Lage Na <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/artist1.jpg" alt="song"  />
                      <span>Lokkhi Sona <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/play.png" alt="song" />
                      <span>Bolna <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/album2.jpg" alt="song" />
                      <span>Eto Kichu Bojho <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/albm6.jpg" alt="song" />
                      <span>Jani Ekdin <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/albm7.jpg" alt="song" />
                      <span>Eto Kichu Bojho <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end -->
                  <!-- song start --> */}
                  <li className="p30">
                    <div className="d-flex songlist-title">
                      <img src="/img/albm8.jpg" alt="song" />
                      <span>Jani Ekdin <br /><small className="d-block d-md-none">Hridoy Khan</small></span>
                    </div>
                    <div className="d-none d-md-block">Hridoy Khan</div>
                    <div>03:28</div>
                    <div className="d-flex songlist-react">
                      <a href="#!" className="d-none d-md-block mr-3"><img src="/img/icons/icon-heart.svg" alt="" /></a>
                      <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                      <div className="pop-content">
                        <div className="d-flex popup-album">
                          <img src="/img/popup-album.jpg" alt="album" />
                          <div>
                            <h6 className="title2">Jani Ekdin</h6>
                            <p className="f14">Hridoy Khan</p>
                          </div>
                        </div>
                        <ul className="song-desc-reacts-pop1">
                          <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                          <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="remove-queue">
                      <img src="/img/icons/icon-cross2.svg" alt="" />
                    </div>
                  </li>
                  {/* <!-- song end --> */}
                </ul>
              </div>
            </div>
              </div>
            </section>
        </div>
        <Player />
        </Fragment>
        )
    }
}

export default HomePlayerQue;
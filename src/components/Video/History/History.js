import React from 'react';

const History = () => {
    return (
        <div className="collapse" id="history" data-parent="#collapse-area">
            <ul className="songlist songlist-video songs-songlist">
                <li className="songlistli1 bt-none d-none d-md-flex">
                <div>TRACK LIST</div>
                <div>ARTIST</div>
                <div>LENGTH</div>
                <div></div>
                </li>
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/trendingvideo1.jpg" alt="song" />
                    <span>Video name will be here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Video name will be here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Remove from favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                    <a href="#!" className="remove-queue"><img src="/img/icons/icon-cross2.svg" alt="" /></a>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/trendingvideo2.jpg" alt="song" />
                    <span>Video name will be here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Video name will be here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Remove from favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                    <a href="#!" className="remove-queue"><img src="/img/icons/icon-cross2.svg" alt="" /></a>
                </div>
                </li>
                {/* <!-- song end -->
                <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/trendingvideo3.jpg" alt="song" />
                    <span>Video name will be here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Video name will be here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Remove from favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                    <a href="#!" className="remove-queue"><img src="/img/icons/icon-cross2.svg" alt="" /></a>
                </div>
                </li>
                {/* <!-- song end -->
                <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/pvideo4.jpg" alt="song" />
                    <span>Video name will be here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Video name will be here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Remove from favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                    <a href="#!" className="remove-queue"><img src="/img/icons/icon-cross2.svg" alt="" /></a>
                </div>
                </li>
                {/* <!-- song end -->
                <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/vexplore7.jpg" alt="song" />
                    <span>Video name will be here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Video name will be here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Remove from favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                    <a href="#!" className="remove-queue"><img src="/img/icons/icon-cross2.svg" alt="" /></a>
                </div>
                </li>
                {/* <!-- song end --> */}
            </ul>
            </div>
    );
}

export default History;

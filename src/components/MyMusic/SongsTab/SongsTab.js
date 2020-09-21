import React from 'react';

const SongsTab = () => {
    return (
        <div className="collapse" id="songs" data-parent="#collapse-area">
            <ul className="songlist songs-songlist">
                <li className="songlistli1 bt-none d-none d-md-flex">
                <div>TRACK LIST</div>
                <div>ARTIST</div>
                <div>LENGTH</div>
                <div></div>
                </li>
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/album3.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/album4.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/albm7.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/youmaylike3.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/youmaylike1.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/albm7.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/youmaylike3.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
                {/* <!-- song start --> */}
                <li>
                <div className="d-flex songlist-title">
                    <img src="/img/youmaylike1.jpg" alt="song" />
                    <span>Music name goes here <br /><small className="d-block d-md-none">Artist Name</small></span>
                </div>
                <div className="d-none d-md-block">Artist Name</div>
                <div className="d-none d-md-block">00:00</div>
                <div className="d-flex songlist-react">
                    <a href="#!"><img src="/img/icons/icon-heart-active.svg" className="heart heart-active" alt="" /></a>
                    <a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
                    <div className="pop-content">
                    <div className="d-flex popup-album">
                        <img src="/img/popup-album.jpg" alt="album" />
                        <div>
                        <h6 className="title2">Music Name Goes Here</h6>
                        <p className="f14">Artist Name</p>
                        </div>
                    </div>
                    <ul className="song-desc-reacts-pop1">
                        <li><a href="#!"><img src="/img/icons/icon-queue.svg" alt="" /> Add to queue</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-add-to-playlist.svg" alt="" /> Add to playlist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /> Add to favorite</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-album.svg" alt="" /> View album</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-user.svg" alt="" /> Go to artist</a></li>
                        <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                    </ul>
                    </div>
                </div>
                </li>
                {/* <!-- song end --> */}
            </ul>
            </div>
    );
}

export default SongsTab;

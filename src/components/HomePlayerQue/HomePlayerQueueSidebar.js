import React from 'react';

const HomePlayerQueueSidebar = () => {
    return (
        <div className="sidebar left-sidebar queuebar d-none d-md-block">
          <div className="queue-left">
            <a href="#!"><img src="/img/artist1.jpg" alt="artist" /></a>
            <ul className="queue-left-icon">
              <li><a href="#!"><img src="/img/icons/icon-microphone.svg" alt="" /></a></li>
              <li><a href="#!"><img src="/img/icons/icon-heart.svg" alt="" /></a></li>
              <li><a href="#!"><img src="/img/icons/icon-plus.svg" alt="" /></a></li>
              <li><a href="#!" className="popper" data-toggle="popover"><img src="/img/icons/icon-more.svg" alt="" /></a>
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
                    <li><a href="#!"><img src="/img/icons/icon-share.svg" alt="" /> Share music</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <div>
              <h6>Bhalo Lage Na</h6>
              <p className="p18">Hridoy Khan</p>
            </div>
          </div>
        </div>
    );
}

export default HomePlayerQueueSidebar;

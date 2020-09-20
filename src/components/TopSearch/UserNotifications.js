import React from 'react';

const UserNotifications = () => {
    return (
        <div className="user-menu" id="usertab2show">
            <h4 className="noti-heading">Notifications</h4>
            <ul className="notification-list">
            <li className="waves-effect">
                <a href="#!">
                <div className="d-flex">
                    <div className="noti-action noti-comment"><img src="img/notification1.jpg" alt="notification" /></div>
                    <div>
                    <p className="noti-date">Yesterday at 3:00 pm</p>
                    <h4 className="user-name">Russell responed to your comment, Tap to view details.</h4>
                    </div>
                </div>
                </a>
            </li>
            <li className="waves-effect">
                <a href="#!">
                <div className="d-flex">
                    <div className="noti-action noti-like"><img src="img/notification2.jpg" alt="notification" /></div>
                    <div>
                    <p className="noti-date">28 April at 6:00 pm</p>
                    <h4 className="user-name">Shariar ahmed liked to your comment, Tap to view details.</h4>
                    </div>
                </div>
                </a>
            </li>
            </ul>
            <div className="notification-drop-btm">
            <p className="noti-date">22 April at 5:00 pm</p>
            <h4>Listen Hridpindo on Shadhin music</h4>
            <p>Lorem ipsum dolor set amit, consectetur adipiscing elit. Lorem ipsum dolor set amit.</p>
            <img src="img/notification3.jpg" alt="notifications" />
            </div>
        </div>
    );
}

export default UserNotifications;

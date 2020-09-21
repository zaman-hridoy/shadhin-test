import React, { Component } from 'react';

class UserMenu extends Component {
    state = {
        slideValue: ''
    }
    setValue = e => {
        // this.setState({ slideValue: e.target.value });
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="user-menu" id="usertab1show">
                <ul>
                    <li className="waves-effect">
                        <a href="#">
                            <div className="d-flex">
                            <ul className="d-flex user-desc">
                                <li><img src="/img/user.jpg" className="dropdown-user" alt="user" /></li>
                                <li><h4 className="user-name">Johnathon Joe</h4><p className="phone">+8801710 000 000</p></li>
                            </ul>
                            <i className="fa fa-chevron-right"></i>
                            </div>
                        </a>
                    </li>
                    <li className="waves-effect">
                        <div className="d-flex upgrade-to-pro">
                            <div className="user-upgrade">
                            <h4>Upgrade to pro</h4>
                            <p>Ad-free, unlimited offline downloads and create playlist</p>
                            </div>
                            <a href="#!" className="waves-effect user-get-pro">Get Pro</a>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex">
                            <h4>App push notifications</h4>
                            <label className="switch">
                            <input type="checkbox" onChange={this.setValue} />
                            <span className="slider round"></span>
                            </label>
                        </div>
                    </li>
                    <li className="waves-effect">
                        <a href="#!">
                            <div className="d-flex">
                            <h4>Your point</h4>
                            <h6 className="your-point">100</h6>
                            </div>
                        </a>
                    </li>
                    <li className="waves-effect">
                        <a href="#!">
                            <div className="d-flex">
                            <h4>Rate on Google play</h4>
                            <i className="fa fa-chevron-right"></i>
                            </div>
                        </a>
                    </li>
                    <li className="waves-effect">
                        <a href="#!">
                            <div className="d-flex">
                            <h4>Contact us</h4>
                            <i className="fa fa-chevron-right"></i>
                            </div>
                        </a>
                    </li>
                    <li className="waves-effect">
                        <a href="#!">
                            <div className="d-flex">
                            <h4>Terms of use</h4>
                            <i className="fa fa-chevron-right"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="waves-effect user-logout">Log out</a>
                    </li>
                    <li>
                        <p className="dropdown-copyright">&copy; 2020 Shadhin. All rights reserved.</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserMenu;

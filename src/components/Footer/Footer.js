import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="row">
            <div className="col">
                <ul className="first-block">
                <li><a href="#"><img src="/img/logo2.png" className="footer-logo" alt="logo" /></a></li>
                <li><a href="#!"><i className="fa fa-instagram"></i>Instagram</a></li>
                <li><a href="#!"><i className="fa fa-facebook"></i>Facebook</a></li>
                <li><a href="#!"><i className="fa fa-twitter"></i>Twitter</a></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                <li><h4 className="footer-title">Who we are?</h4></li>
                <li><a href="#!">About us</a></li>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">News</a></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                <li><h4 className="footer-title">Explore</h4></li>
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Podcast</a></li>
                <li><a href="#!">Video</a></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                <li><h4 className="footer-title">Legal</h4></li>
                <li><a href="#!">Help & Support</a></li>
                <li><a href="#!">Terms of services</a></li>
                <li><a href="#!">FAQ</a></li>
                </ul>
            </div>
            <div className="col d-none d-md-block">
                <ul>
                <li><h4 className="footer-title">Products</h4></li>
                <li><a href="#!">Android</a></li>
                <li><a href="#!">iOS</a></li>
                <li><a href="#!">Web Player</a></li>
                </ul>
            </div>
            <div className="col-12 d-block d-md-none">
                <div className="footer-mobile-app">
                <h6>Download the App</h6>
                <ul>
                    <li><a href="#!"><img src="/img/gp.png" alt="logo" /></a></li>
                    <li><a href="#!"><img src="/img/as.png" alt="logo" /></a></li>
                </ul>
                </div>
            </div>
            </div>
            <p className="copyright">&copy; 2020 Shadhin. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

import React from 'react';
import './App.css';

// components
import WebViewSideBar from './components/Sidebar/WebViewSideBar.js'; // web view sidebar
import MobileViewSideBar from './components/Sidebar/MobileViewSideBar.js'; // mobile view navigation bar
import TopSearchWithUser from './components/TopSearch/TopSearchWithUser.js'; //Top search
import Footer from './components/Footer/Footer.js'; // Footer section
import Homepage from './components/HomePage/Homepage.js'; // body content

function App() {
  return (
    <div className="container-fluid">
        <section className="main-body">
            {/* side bar */}
            <WebViewSideBar />
            <MobileViewSideBar />
            <div className="sidebar right-sidebar">
                <TopSearchWithUser />
                <Homepage />
                <Footer />
            </div>
        </section>
    </div>
  );
}

export default App;

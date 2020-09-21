import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { appendScript, removeScript } from '../../utils/appendScripts.js';
import { getSearchResults, clearSearchResult } from '../../store/actions/searchAction.js';

// components
import UserMenu from './UserMenu.js';
import UserNotifications from './UserNotifications.js';
import MobileSearchView from './MobileSearchView.js';
import SearchResult from './SearchResult.js';

class TopSearchWithUser extends Component {
    state = {
        keyword: ''
    }
    componentDidMount() {
        appendScript('/js/popupOnRender.js');
        console.log('back')
    }

    componentWillUnmount() {
        removeScript('/js/popupOnRender.js');
    }

    clearKeyword = () => {
        this.setState({ keyword: '' });
        this.props.clearSearchResult();
    }
    changeHandler = e => {
        this.setState({ keyword: e.target.value });
        this.props.getSearchResults(e.target.value);
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.getSearchResults(this.state.keyword);
    }
    // focusHandler = () => {
    //     this.setState({ showSearchBox: true });
    // }
    // blurHandler = () => {
    //     this.setState({ showSearchBox: false });
    // }
    render() {
        const { keyword } = this.state;
        const { loading, results } = this.props;
        return (
            <Fragment>
                <div className="top-part">
                    <div className="src d-none d-md-block">
                    <form onSubmit={this.submitHandler}>
                        <input 
                            type="text" 
                            // name="" 
                            value={keyword}
                            placeholder="Search artist, songs, videos..."
                            onChange={this.changeHandler}
                            onFocus={this.focusHandler}
                            onBlur={this.blurHandler}
                        />
                        <button type="submit" className="btn-submit"><i className="fa fa-search"></i></button>
                        {keyword.length > 0 && <button onClick={this.clearKeyword} className="search-cancil"><img src="/img/icon-cross.png" alt="icon cross" /></button>}
                    </form>
                    </div>
                    {/* search result */}
                    {results !== null && (
                        <SearchResult 
                            loading={loading}
                            results={results}
                            clearKeyword={this.clearKeyword}
                        />
                    )}

                    <div className="mobile-logo d-block d-md-none">
                        <a href="#"><img src="/img/logo.png" alt="logo" /></a>
                    </div>

                    {/* user info */}
                    <div className="user-info">
                        <ul>
                            <li><a href="#!" className="open-drop" id="usertab2"><i className="fa fa-bell"></i></a></li>
                            <li><a href="#!" className="open-drop" id="usertab1"><img src="/img/user.jpg" alt="user" /></a></li>
                        </ul>
                    </div>

                    {/* user menu */}
                    <UserMenu />

                    {/* user notification */}
                    <UserNotifications />

                    {/* <!-- <div className="user-menu" id="usertab2show">
                    <h4 className="noti-heading">Notifications</h4>
                    <div className="empty-noti">
                        <img src="img/empty-noti.png" alt="empty">
                        <h4>No Notification</h4>
                        <p>Your notification will appear here.</p>
                    </div>
                    </div> --> */}
                </div>

                {/* mobile search view */}
                <MobileSearchView 
                    keyword={keyword}
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    clearKeyword={this.clearKeyword}
                />
            </Fragment>
        )
    }
}

const actions = {
    getSearchResults,
    clearSearchResult
}

const mapStateToProps = state => ({
    loading: state.searchResult.loading,
    results: state.searchResult.results
})

export default connect(mapStateToProps, actions)(TopSearchWithUser);
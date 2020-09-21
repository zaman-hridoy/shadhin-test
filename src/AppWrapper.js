import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import HomePlayerQue from './components/HomePlayerQue/HomePlayerQue';

class AppWrapper extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/q/home-player-queue" component={HomePlayerQue} />
                <Route path="/" component={App} />
            </Switch>
        )
    }
}

export default  AppWrapper;
import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Login} from './_components/Login';
import {LeaderBoard} from './_components/LeaderBoard';

import {SingleUser} from './_components/user/SingleUser';

import {AllQuiz} from './_components/quiz/AllQuiz';
import {SingleQuiz} from './_components/quiz/SingleQuiz';

import {NotFound} from './_components/errors/NotFound';

import {Container} from 'reactstrap';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Router>
                        <Switch>
                            <Route exact path={'/'} component={Login}/>
                            <Route exact path={'/leaderboard'} component={LeaderBoard}/>
                            <Route path={'/user/:id'} component={SingleUser}/>
                            <Route exact path={'/quiz/all'} component={AllQuiz}/>
                            <Route exact path={'/quiz/:id'} component={SingleQuiz}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </Container>
            </div>
        );
    }
}

export default App;

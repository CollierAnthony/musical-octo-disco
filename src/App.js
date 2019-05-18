import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Login} from './_components/Login';
import {HomePage} from './_components/HomePage';
import {LeaderBoard} from './_components/LeaderBoard';

import {SingleUser} from './_components/user/SingleUser';

import {AllQuiz} from './_components/quiz/AllQuiz';
import {SingleQuiz} from './_components/quiz/SingleQuiz';
import {NewQuiz} from './_components/quiz/NewQuiz';

import {NotFound} from './_components/errors/NotFound';

import {Container} from 'reactstrap';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Router>
                        <Switch>
                            <Route exact path={'/'} component={HomePage}/>
                            <Route exact path={'/leaderboard'} component={LeaderBoard}/>
                            <Route path={'/user/:id'} component={SingleUser}/>
                            <Route exact path={'/quiz/all'} component={AllQuiz}/>
                            <Route exact path={'/quiz/new'} component={NewQuiz}/>
                            <Route exact path={'/quiz/:category'} component={SingleQuiz}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </Container>
            </div>
        );
    }
}

export default App;

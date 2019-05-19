import React, {Component} from 'react';

import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <img src={logo} alt='logo' />

                <div>
                    <Link to={"/quiz/all"}>Jouer</Link>
                    <Link to={"/leaderboard"}>Leaderboard</Link>
                    <Link to={"/quiz/new"}>Nouveau quiz</Link>
                </div>
            </div>
        )
    }
}

export {HomePage};

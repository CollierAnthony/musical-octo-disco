import React, {Component} from 'react';

import {Link} from "react-router-dom";
import logo from '../assets/img/logo.png';

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <img src={logo} alt='logo'/>

                <div>
                    <Link to={"/quiz/all"} className={"btn"}>Jouer</Link>
                    <Link to={"/leaderboard"} className={"btn"}>Leaderboard</Link>
                    <Link to={"/quiz/new"} className={"btn"}>Nouveau quiz</Link>
                </div>
            </div>
        )
    }
}

export {HomePage};

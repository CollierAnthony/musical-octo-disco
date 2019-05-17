import React, {Component} from 'react';

import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage
                <Link to={"/quiz/new"}>Nouveau quiz</Link>
                <Link to={"/quiz/all"}>Tous les quiz</Link>
            </div>
        )
    }
}

export {HomePage};
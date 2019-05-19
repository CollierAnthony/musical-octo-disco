import React, {Component} from 'react'
import axios from "axios";

import {Link} from "react-router-dom";

class LeaderBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            leaderboard: null,
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/leaderboard`)
            .then(res => {
                const leaderboard = res.data;
                this.setState({leaderboard});
            })
    }

    render() {
        if (this.state.leaderboard) {
            return (
                <div className={"leaderboard"}>
                    <h1>Classement :</h1>
                    {this.state.leaderboard.map((player, key) =>
                        <div key={key} className={"leaderboard_user"}><span
                            className={"leaderboard_user-position position-" + (key+1)}>#{key + 1}</span> <b>{player.username}</b> - <i>{player.score > 1 ? player.score + " points" : player.score + " point"}</i>
                        </div>
                    )}
                    <Link to={"/"} className={"btn"}>Retour à l'accueil</Link>
                </div>
            )
        } else {
            return <h1>Ca charge pélo</h1>
        }
    }
}

export {LeaderBoard};
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
                <div>
                    Classement :
                    {this.state.leaderboard.map((player, key) =>
                        <div key={key}><span
                            className={"position-" + key}>#{key + 1}</span> {player.username} - {player.score > 1 ? player.score + " points" : player.score + " point"}
                        </div>
                    )}
                    <Link to={"/"}>Retour à l'accueil</Link>
                </div>
            )
        } else {
            return <h1>Ca charge pélo</h1>
        }
    }
}

export {LeaderBoard};
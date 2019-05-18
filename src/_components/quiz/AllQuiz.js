import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import {Row, Col} from "reactstrap";

class AllQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/categories`)
            .then(res => {
                const categories = res.data;
                this.setState({categories});
            })
    }

    render() {
        console.log(this.state.categories);
        return (
            <div>
                <Row>
                    {this.state.categories.map((category, key) =>
                        <Col xs={6} key={key} className={'text-center my-2 px-2'}>
                            <Link to={'/quiz/' + category.name}>
                                <div className={'bg-light rounded-lg p-5'}>
                                    {category.name.toUpperCase()}
                                </div>
                            </Link>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export {AllQuiz};

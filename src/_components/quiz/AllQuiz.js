import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col} from 'reactstrap';
import axios from "axios";

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
                <h4>Selectionnez un thème :</h4>

                <div className="section-quiz">
                    <p>Quiz</p>
                </div>
                <Row className="selection-quiz">
                    {this.state.categories.map((category, key) =>
                        <Col xs={6} key={key} className={'text-center'}>
                            <Link to={'/quiz/' + category.name}>
                                <div className={'bg-light rounded-lg'}>
                                    {category.name.toUpperCase()}
                                </div>
                            </Link>
                        </Col>
                    )}

                    <Col xs={6} className={'text-center empty'}>
                        <Link to={'/quiz/all' }>
                            <div className={'bg-light rounded-lg'}>

                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className={'text-center empty'}>
                        <Link to={'/quiz/all' }>
                            <div className={'bg-light rounded-lg'}>

                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export {AllQuiz};

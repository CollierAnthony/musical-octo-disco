import React, {Component} from 'react'
import { Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
class SingleQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: {
                'Culture': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (culture)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (culture)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (culture)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Histoire': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (histoire)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (histoire)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (histoire)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Musique': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (musique)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (musique)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (musique)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Sciences': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (sciences)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (sciences)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (sciences)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Cuisine': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (cuisine)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (cuisine)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (cuisine)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Animaux': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (animaux)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (animaux)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (animaux)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Art': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (art)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (art)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (art)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
                'Cinema': {
                    questions: [
                        {
                            'title': 'Question numéro 1 (cinema)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 2 (cinema)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        },
                        {
                            'title': 'Question numéro 3 (cinema)',
                            'answers': {
                                1: 'Réponse fausse',
                                2: 'Réponse fausse',
                                3: 'Réponse fausse',
                                4: 'Réponse vraie',
                            }
                        }
                    ]
                },
            }
        }
    }

    render() {
        let category = this.props.match.params.category;
        let question = this.state.quiz[category].questions[0];
        return (
            <div>
                <Row><Col className="question-infos"><span className="font-weight-bold font-italic">{category}</span> - <span>Question 1</span></Col></Row>
                <Row><Col className="question-title">{question.title}</Col></Row>
                <Row><Col className="question-img"></Col></Row>

                <Row><Col xs={{size:2, offset: 5}} className="spacer"></Col></Row>

                <Row className="answers">
                    <div className="timer"></div>
                    <Col xs={6} className={'text-center my-2 px-2'}>
                        <Link className="answers-link" to={'/quiz/' + category}>
                            <div className={'bg-light  rounded-lg px-2 py-4'}>
                                {question.answers[1]}
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className={'text-center my-2 px-2'}>
                        <Link className="answers-link" to={'/quiz/' + category}>
                            <div className={'bg-light  rounded-lg px-2 py-4'}>
                                {question.answers[2]}
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className={'text-center my-2 px-2'}>
                        <Link className="answers-link" to={'/quiz/' + category}>
                            <div className={'bg-light  rounded-lg px-2 py-4'}>
                                {question.answers[3]}
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className={'text-center my-2 px-2'}>
                        <Link className="answers-link" to={'/quiz/' + category}>
                            <div className={'bg-light  rounded-lg px-2 py-4'}>
                                {question.answers[4]}
                            </div>
                        </Link>
                    </Col>

                </Row>
            </div>
        )
    }
}

export {SingleQuiz};

import React, {Component} from 'react'

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
        return (
            <div>
                <p>Les questions du quiz {category} :</p>
                <ul>
                    {this.state.quiz[category].questions.map((question, key) =>
                        <li key={key}>{question.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export {SingleQuiz};
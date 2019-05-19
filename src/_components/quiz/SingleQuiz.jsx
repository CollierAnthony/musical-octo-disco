import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Col, Row, Button} from "reactstrap";

class SingleQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionsList: [],
            answered: false,
            activeQuestion: 0,
            score: 0,
            timeLeft: 15,
            endOfQuiz: false
        };

        this.submitAnswer = this.submitAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.renderClass = this.renderClass.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/quiz/` + this.props.match.params.category)
            .then(res => {
                const questionsList = res.data;
                this.setState({questionsList});
                this.startTimer();
            });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    submitAnswer(answer) {
        if (!this.state.answered) {
            this.setState({answered: true});
            console.log(answer);
            if (answer === "A") {
                this.setState({score: this.state.score + this.state.questionsList.questions[this.state.activeQuestion].difficulty})
            }
            setTimeout(this.nextQuestion, 2300);
        }
    }

    nextQuestion() {
        this.setState({answered: false});
        this.setState({activeQuestion: this.state.activeQuestion + 1});
        this.setState({timeLeft: 15});
        console.log("next question");
        console.log(this.state.activeQuestion);
        console.log(this.state.score);
    }

    renderClass(question) {
        if (this.state.answered) {
            if (question === "A") return "true";
            return "false";
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (!this.state.answered && this.state.activeQuestion < 10) {
                if (this.state.timeLeft > 0) {
                    this.setState({timeLeft: this.state.timeLeft - 1})
                } else if (this.state.timeLeft === 0) {
                    this.submitAnswer('timeOut');
                }
            } else {
                return;
            }
        }, 1000);
    }

    render() {
        let {questionsList} = this.state;
        let category = this.props.match.params.category;
        if (questionsList.questions) {
            let question = questionsList.questions[this.state.activeQuestion];
            if (question) {
                return (
                    <div className="single-quiz">
                        <p><span className={"title-category"}>{category}</span> -
                            Question {this.state.activeQuestion + 1}</p>
                        <h4>{question.title}</h4>
                        <div className="quiz-img"><img src={question.image} alt={""}/></div>
                        <div className="spacer"></div>
                        <Row className="answers">
                            <p className="timer">{this.state.timeLeft}</p>

                            {question.answers.map((answer, key) =>
                                <Col key={key} xs={6}
                                     onClick={(e) => this.submitAnswer(Object.keys(answer)[0])}
                                      >

                                    <div className={"bg-light rounded-lg " + this.renderClass(Object.keys(answer)[0])} >{answer[Object.keys(answer)[0]]}</div>
                                </Col>
                            )}
                        </Row>
                        <span className={"points"}>
                            {question.difficulty} point{question.difficulty > 1 ? 's' : ''}
                        </span>
                    </div>
                )
            } else {
                return (
                    <div className="d-flex flex-column align-items-center">
                        <h4>Le quiz est terminé</h4>
                        <p>Score final : {this.state.score}</p>
                        <Button>Soumets ton score</Button>
                        <Link to={'/'} className={'btn'}>Retourne à l'accueil</Link>
                    </div>
                )
            }
        } else {
            return <p>Chargement en cours</p>
        }

    }
}

export {
    SingleQuiz
};

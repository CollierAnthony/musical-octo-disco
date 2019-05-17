import React, {Component} from 'react';
import axios from "axios";

import {Col, Row, Button} from "reactstrap";

class SingleQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionsList: [],
            answered: false,
            activeQuestion: 0,
            score: 0,
        };

        this.submitAnswer = this.submitAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.renderClass = this.renderClass.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:8081/categories/` + this.props.match.params.category)
            .then(res => {
                const questionsList = res.data;
                this.setState({questionsList});
            })
    }

    submitAnswer(answer, e) {
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

    render() {
        let {questionsList} = this.state;
        let category = this.props.match.params.category;
        if (questionsList.questions) {
            let question = questionsList.questions[this.state.activeQuestion];
            if (question) {
                return (
                    <div>
                        <h1><span className={"title-category"}>{category}</span> -
                            Question {this.state.activeQuestion + 1}</h1>
                        <img src={question.image} alt={""}/>
                        <p>{question.title}</p>
                        <Row>
                            {question.answers.map((answer, key) =>
                                <Col key={key} xs={6}
                                     onClick={(e) => this.submitAnswer(Object.keys(answer)[0], e)}
                                     className={this.renderClass(Object.keys(answer)[0])}>{answer[Object.keys(answer)[0]]}</Col>
                            )}
                        </Row>
                        <span className={"points"}>
                            {question.difficulty} point{question.difficulty > 1 ? 's' : ''}
                        </span>
                    </div>
                )
            }
            return (
                <div>
                    <h1>C'est fini wesh</h1>
                    <p>Téma ton score wesh : {this.state.score}</p>
                    <Button>Soumets ton score wesh</Button>
                </div>
            )

        } else {
            return <p>Chargement en cours</p>
        }

    }
}

export {
    SingleQuiz
};
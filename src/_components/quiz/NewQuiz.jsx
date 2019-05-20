import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input, Label} from "reactstrap";

class NewQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nbQuestions: 1,
            quizName: '',
            questions: [],
            currentQuestion: {
                id: null,
                title: null,
                image: null,
                difficulty: 1,
                answers: []
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let questionsVar = this.state.questions;
        let currentQuestionVar = this.state.currentQuestion;
        questionsVar.push(currentQuestionVar);
        this.setState({questions: questionsVar});
        this.setState({nbQuestion: this.state.nbQuestions + 1});
        e.target.reset();
        console.log(this.state);
    }

    handleChange(e) {
        let currentQuestionVar = this.state.currentQuestion;
        let target = e.target.name;
        let value = e.target.value;
        if (target === "quizName") {
            this.setState({quizName: e.target.value});
        } else if (target === "A") {
            currentQuestionVar.answers[0] = {"A": value};
        } else if (target === "B") {
            currentQuestionVar.answers[1] = {"B": value};
        } else if (target === "C") {
            currentQuestionVar.answers[2] = {"C": value};
        } else if (target === "D") {
            currentQuestionVar.answers[3] = {"D": value};
        } else {
            currentQuestionVar[target] = value;
        }
        currentQuestionVar.id = this.state.nbQuestions;
        this.setState({
            currentQuestion: currentQuestionVar
        });
        console.log('currentQuestion', this.state.currentQuestion);
        console.log('state', this.state);
    }

    render() {
        if (this.state.questions) {
            return (
                <div className="new-quiz">
                    <FormGroup>
                        <h1>Nom du quiz</h1>
                        <Input placeholder={"Nom du quiz"} onChange={this.handleChange} name={"quizName"}
                               id={"quizName"} required/>
                    </FormGroup>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <h2>Question n°{this.state.nbQuestions}</h2>
                            <Input placeholder={"Ta question ici"} onChange={this.handleChange}
                                   name={"title"} id={"title"} required/>
                            <Row>
                                <Col xs={6}>
                                    <Input
                                        className={"bg-light rounded-lg true"} placeholder={"Bonne réponse"}
                                        onChange={this.handleChange} required name={"A"} id={"A"}/>
                                </Col>
                                <Col xs={6}>
                                    <Input
                                        className={"bg-light rounded-lg false"} placeholder={"Mauvaise réponse"}
                                        onChange={this.handleChange} required name={"B"} id={"B"}/>
                                </Col>
                                <Col xs={6}>
                                    <Input
                                        className={"bg-light rounded-lg false"} placeholder={"Mauvaise réponse"}
                                        onChange={this.handleChange} required name={"C"} id={"C"}/>
                                </Col>
                                <Col xs={6}>
                                    <Input
                                        className={"bg-light rounded-lg false"} placeholder={"Mauvaise réponse"}
                                        onChange={this.handleChange} required name={"D"} id={"D"}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"quizDifficulty"}>Difficulté</Label>
                            <Input type={"number"} defaultValue={1} name={"quizDifficulty"} id={"quizDifficulty"}/>
                        </FormGroup>
                        <button type={'submit'} className={'btn'}>Ajouter la question</button>
                    </Form>
                </div>
            )
        }
    }
}

export {
    NewQuiz
};

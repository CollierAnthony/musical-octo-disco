import React, {Component} from 'react'

class SingleQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //...
        }
    }

    render() {
        let quizId = this.props.match.params.id;
        return (
            <div>
                Single quiz (id = {quizId})
            </div>
        )
    }
}

export {SingleQuiz};
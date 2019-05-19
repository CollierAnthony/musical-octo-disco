import React, {Component} from 'react'
import AddQuestion  from './AddQuestion.jsx';

class NewQuiz extends Component {
    constructor(){
        super();

        this.state = {
            questions: []
    }
    }

    appendChild(){
        this.setState({
            questions: [
                ...this.state.questions,
                <AddQuestion/>
            ]
        });
    }

    render() {
        return (
            <div className="addQuiz">
              <form>

                  <label>Question </label>
                  <br />

                  <input type="text" name="title" placeholder="Question" />
                  <input type="file" name="image" accept="image/png, image/jpeg, image/jpg" />
                  <input type="text" name="A" placeholder="Bonne réponse" className="true"/>
                  <input type="text" name="B" placeholder="Mauvaise réponse" className="false"/>
                  <input type="text" name="C" placeholder="Mauvaise réponse" className="false"/>
                  <input type="text" name="D" placeholder="Mauvaise réponse" className="false"/>
                  <br />


                  <div className="box-container">
                      {this.state.questions.map(child => child)}
                  </div>
                  <a onClick={() => this.appendChild()}>Ajouter une question</a><br />
                  <input type="submit" />
              </form>
            </div>
        )
    }
}

export {NewQuiz};

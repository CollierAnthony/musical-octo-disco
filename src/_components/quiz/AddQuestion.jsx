import React, {Component} from 'react'
import App from "../../App";




    class AddQuestion extends Component {

        render(){
            return(
                <div>
                    <br />
                    <label>Question </label>
                    <br />
                    <input type="text" name="title" placeholder="Question" />
                    <input type="file" name="image" accept="image/png, image/jpeg, image/jpg" />
                    <input type="text" name="A" placeholder="Bonne réponse" className="true"/>
                    <input type="text" name="B" placeholder="Mauvaise réponse" className="false"/>
                    <input type="text" name="C" placeholder="Mauvaise réponse" className="false"/>
                    <input type="text" name="D" placeholder="Mauvaise réponse" className="false"/>
                    <br />

                </div>
            );
        }

}


export default AddQuestion;

import React, {Component} from 'react'
import { Row, Col} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
class Login extends Component {
    render() {
        return (
           <div className="loginpage">
               <Row>
                   <Col xs={{ size: 12}}  className="text-center"><h1>Musical-octo-disco</h1></Col>
               </Row>
               <Row>
                   <Col xs={{ size: 10, offset: 1 }}>
                   <Form>
                       <FormGroup>
                           <Label for="exampleEmail">Email</Label>
                           <Input type="email" name="email" id="exampleEmail" />
                       </FormGroup>

                       <FormGroup>
                           <Label for="examplePassword">Password</Label>
                           <Input type="password" name="password" id="examplePassword" />
                       </FormGroup>
                       <FormGroup row>
                           <Col xs={{ size: 8, offset:2}}>
                               <Button block>Submit</Button>
                           </Col>
                       </FormGroup>
                   </Form>
                   </Col>
                   <Col xs={{ size: 12}}  className="text-center">Pas de compte ? <a href="">Inscrivez-vous</a></Col>
               </Row>
           </div>

        )
    }
}

export {Login};

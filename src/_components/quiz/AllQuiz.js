import React, {Component} from 'react'
import { Row, Col} from 'reactstrap';

class AllQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //...
        }
    }

    render() {
        return (
            <Row>
                <Col xs={{ size: 6}}>
                    5480 pts
                </Col>
                <Col xs={{ size: 6}} className="text-right">
                    carré?
                </Col>
            </Row>

        )
    }
}

export {AllQuiz};

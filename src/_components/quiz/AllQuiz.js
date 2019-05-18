import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { Row, Col} from 'reactstrap';

class AllQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                'Culture',
                'Histoire',
                'Musique',
                'Sciences',
                'Cuisine',
                'Animaux',
                'Art',
                'Cinema'
            ],
        }
    }

    render() {
        return (
          <div>
            <Row>
                <Col xs={{ size: 6}}>
                    5480 pts
                </Col>
                <Col xs={{ size: 6}} className="text-right">
                    carré?
                </Col>
            </Row>
            <Row>
                {this.state.categories.map((category, key) =>
                    <Col xs={6} key={key} className={'text-center my-2 px-2'}>
                        <Link to={'/quiz/' + category}>
                            <div className={'bg-light rounded-lg p-5'}>
                                {category.toUpperCase()}
                            </div>
                        </Link>
                    </Col>
                )}
            </Row>
          </div>
        )
    }
}

export {AllQuiz};

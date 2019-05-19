import React, {Component} from 'react'

class SingleUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //...
        }
    }

    render() {
        let userId = this.props.match.params.id;
        return (
            <div>
                Single user (id = {userId})
            </div>
        )
    }
}

export {SingleUser};
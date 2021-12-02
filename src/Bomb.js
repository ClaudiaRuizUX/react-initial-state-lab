

import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    updateSeconds = () => {
        this.setState({
            secondLeft: this.state.secondsLeft -1
        })
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div><button onClick={this.setSecondsLeft}>Set Seconds</button> {message}</div>
        )
    }
}

export default Bomb;

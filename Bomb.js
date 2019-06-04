import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    renderDisplay() {
        const {count} = this.state
        if(count >=8 ) {
            clearInterval(this.interval)
            return 'BOOM!!!!!'
        } else if(count % 2 === 0 ) {
            return 'Tick'
        } else {
            return 'Tock'
        }
    }
    render() {
        return (
            <div className="Bomb">
                    {this.renderDisplay()}
            </div>
        );
    }
}
export default Bomb
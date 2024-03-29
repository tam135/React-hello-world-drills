import React, { component } from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    triggerButtonHandler = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    
    renderDisplay() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if(spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        } else {
            return 'You are Safe!'
        }
    }

    render() {
        return (
            <div className="RouletteGun">
               <p>{this.renderDisplay()}</p>
               <button onClick = {this.triggerButtonHandler}>Pull the Trigger!</button>
            </div>
        );
    }
}

export default RouletteGun
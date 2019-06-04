import React, { Component } from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
    }

    handleFriendButton = () => {
        this.setState({
            who: 'Friend!'
        })
    }

    handleReactButton = () => {
        this.setState({
            who: 'React!'
        })
    }

    handleWorldButton = () => {
        this.setState({
            who: 'World!'
        })
    }


    render() {
    return (
      <main className="HelloWorld">
        <div>
            <p>Hello, {this.state.who}</p>
            <button onClick = {this.handleFriendButton}>Friend</button>
            <button onClick= {this.handleReactButton}>React!</button>
            <button onClick= {this.handleWorldButton}>World!</button>
        </div>
      </main>
    );
  }
}

export default HelloWorld
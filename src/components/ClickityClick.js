import React, {Component} from "react";

export default class ClickityClick extends React.Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
            nameInfo: {
                first: 'Fuque',
                last: 'Boizinho'
            }
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            nameInfo: {
                ...this.state.nameInfo,
                first: 'Coque'
            }
        }, () => console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Clique me!</button>
            </div>
        )
    }
} 
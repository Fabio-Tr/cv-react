import { Component } from "react";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "Clicca"
        }

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick() {
        this.setState({text: "bravo bravo"})
    };

    render() {
        const {text} = this.state;
        const {handleClick} = this;
        return <button onClick={handleClick}>{text}</button>
    };
}

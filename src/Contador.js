import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Contador: props.Contador 
        }
    }

    ButtonDiminuirClick()
    {
        this.setState({Contador : this.state.Contador - 1});
    }

    ButtonAumentarClick()
    {
        this.setState({Contador : this.state.Contador + 1});
    }

    render() {

        const Style = {
            color: this.props.Color
        }

        return (
            <div>
               
                <span style={Style}>Felphe é gay em diferentes cores: {this.state.Contador}</span>
                <button onClick={this.ButtonDiminuirClick.bind(this)}>-</button>
                <button onClick={this.ButtonAumentarClick.bind(this)} >+</button>
            </div>
        )
    }
}

export default Contador;


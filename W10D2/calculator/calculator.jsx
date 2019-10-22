import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = { result: 0, num1: "", num2: "" }
    }

    // your code here
    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num1 });
    }

    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({ num2 });
    }

    onChange() {
        this.setState( { num1: event.currentTarget.value, num2} );
    }

    clear(e) {
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 });
    }

    add(e) {
        e.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState( {result} );
    }

    substract(e) {
        e.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState( {result} );
    }

    multiply(e) {
        e.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState( {result} );
    }

    divide(e) {
        e.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState( {result} );
    }

    render() {
        const { num1, num2, result } = this.state;
        return (
            <div>
                <h1>{ this.state.result }</h1>
                <input onChange={this.setNum1.bind(this)} value={this.state.num1} />
                <input onChange={this.setNum2.bind(this)} value={this.state.num2} />
                <button onClick={this.clear.bind(this)}>Clear</button>
                <br />
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.substract.bind(this)}>-</button>
                <button onClick={this.multiply.bind(this)}>*</button>
                <button onClick={this.divide.bind(this)}>/</button>
            </div>
        );
    }
}

export default Calculator;
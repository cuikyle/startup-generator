import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import './App.css';
import './index.css';


var api = "http://localhost:3000/thisforthat"; //change this is the localhost port is changed

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            this: "!!!",            //default values, shouldn't be seen except when debugging (only shows when API call fails)
            that: "???"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){            //sets the initial values of the this + that on the page based on an API call
        Request.get(api).then((response) => {
            this.setState({
                this: response.body.this,
                that: response.body.that,
            })
        })
    }

    handleClick() {                 //getting new this + that pairings on button click
        Request.get(api).then((response) => {
            this.setState({
                this: response.body.this,
                that: response.body.that,
            })
        })
    }

    render() {
        return (
            <div>
                <p className={"call-text"}>{this.state.this} but with {this.state.that}</p>
                <button onClick={this.handleClick}>New idea!</button>
            </div>

        );
    }
};

ReactDOM.render(<MyComponent/>, document.getElementById("root"));

export default MyComponent;
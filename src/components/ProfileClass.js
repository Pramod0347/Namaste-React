import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    render() {
        return (
            <div>
                <h1>Profile Class {this.props.name}</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        )
    }
}

export default Profile;

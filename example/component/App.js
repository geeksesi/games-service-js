import React from "react";
import "./App.css";
// import { say_hello } from "../../src";


export default class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                {gamesservice.say_hello()}
            </div>
        );
    }
}
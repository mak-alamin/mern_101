import './styles/main.scss'

import React from "react"
import ReactDOM from "react-dom"

import SquareMe from "./components/SquareMe"
import Rectangle from "./components/Rectangle"

import "./index.html"


let rect1 = new Rectangle(4, 10)
console.log(rect1.area)

console.log(rect1.a);

console.log(SquareMe(10));


function App() {
    return (
        <div>
            <h1>Hello From MERN World!</h1>
            <h1>What the hell is React!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))
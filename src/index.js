import React from "react"
import ReactDOM from "react-dom"

import SquareMe from "./components/SquareMe"
import Rectangle from "./components/Rectangle"

import "./index.html"


let rect1 = new Rectangle(4, 20)
console.log(rect1.area)

console.log(rect1.a);

console.log(SquareMe(10));


function App() {
    return <h1>Hello From MERN World!</h1>
}

ReactDOM.render(<App />, document.getElementById("app"))
import React from "react";
import ReactDOM from "react-dom/client";
// const name='Priyam'

// const obj={
//     age:20,
//     id:2384
// }
// const element=<h1>Hello this is {name}</h1>
// function greet() {
//     // return <h2>Welcome to Snacks Mart {name}</h2>
//     return <h2>Welcome to Snacks Mart {obj.age}</h2>
    
// }
// greet()

// function Meet(){
//     return <h2>We will meet tomorrow</h2>
// }
// const element=<Meet/>


function Meet(props){
    return <h2>We will meet tomorrow {props.name} {props.age}</h2>

}
const element=<Meet name="Priyam" age="20"/>
const element2=<h1 id="first" className="second"></h1>
// const element=<Meet/>

const Root=ReactDOM.createRoot(document.getElementById("root"))
// Root.render(element)
Root.render(element)
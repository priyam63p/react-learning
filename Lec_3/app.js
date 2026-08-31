import React from "react";
import ReactDOM from "react-dom/client";

// const newElement=<h1>Hello today is wednesday</h1>
// const element=React.createElement("h1",{id:"first",className:"newcls",style:{backgroundColor:"pink",color:"purple "}},"Hello,good evening")
// const element2=React.createElement("h2",{id:"second",className:"new",style:{backgroundColor:"red",color:"white"}},"Hello folks")

// const div1=React.createElement("div",{},[element,element2])

// const newElement=(
//     <div>
//         <h1 id="first" className="firsst">Hello today is wednesday</h1>
//         <h2>Today is holiday</h2>
//     </div>
// )
const day="Working day"
const obj={
    age:19,
}
const obj2={
    backgroundColor:"black",
    color:"violet",
    fontSize:"30px"
}
const newElement = (
  <>
    <h1 id="first" className="firsst">
      Hello today is wednesday
    </h1>
    <h2 money={23}>Today is holiday</h2>
    <h2 style={obj2}>Yesterday was {day}</h2>
    <p>My age is {obj.age}</p>
  </>
);

function greet(){
    return <h1>Hello,welcome to Snacks Mart</h1>
}
function meet(){
    return <h1>Hello,we will meet soon</h1>
}
const newElement2=greet()
const newElement3=meet()
const newElement4=<>{newElement2}{newElement3}{newElement}</>

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element)
// root.render(element2)
// root.render(div1)
root.render(newElement);
// root.render(newElement2)
// root.render(newElement3)
root.render(newElement4)

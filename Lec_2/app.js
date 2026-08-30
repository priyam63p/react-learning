const element=React.createElement("h1",{id:"first",className:"newcls",style:{backgroundColor:"pink",color:"purple "}},"Hello,good morning")

const element2=React.createElement("h2",{id:"second",className:"new",style:{backgroundColor:"red",color:"white"}},"Hello folks")


const div1=React.createElement("div",{},[element,element2])

const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(element)
// root.render(element2)
root.render(div1)
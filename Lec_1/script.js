// // const header1=document.createElement('h1')
// // header1.innerText="Hello,good morning"
// // header1.style.backgroundColor='aqua'
// // header1.style.color='brown'
// // header1.style.fontSize='30px'
// // const element=document.getElementById("root")
// // element.append(header1)

// // const header2=document.createElement('h2')
// // header2.innerText="Myself Priyam"
// // header2.style.backgroundColor='green'
// // header2.style.color='violet'
// // header2.style.fontSize='30px'
// // element.append(header2)

// // styles={fontSize:"30px",backgroundColor:"aqua",color:"red"}
// const React = {
//   createElement: function (tag, styles, children) {
//     const element = document.createElement(tag);
//     for (let key in styles) {
//       element.style[key] = styles[key];
//     }
//     if (typeof children == "object") {
//       for (let value of children) {
//         element.append(value);
//       }
//     } else {
//       element.innerText = children;
//     }
//     return element;
//   },
// };
// const ReactDOM = {
//   render: function (element, root) {
//     root.append(element);
//   },
// };

// const header1 = React.createElement(
//   "h1",
//   { fontSize: "30px", backgroundColor: "aqua", color: "red" },
//   "Hello,good morning"
// );

// const header2 = React.createElement(
//   "h2",
//   { fontSize: "25px", backgroundColor: "brown", color: "yellow" },
//   "Myself Priyam"
// );

// // const element=document.getElementById("root")
// // element.append(header1)
// // element.append(header2)
// ReactDOM.render(header1, document.getElementById("root"));
// ReactDOM.render(header2, document.getElementById("root"));
// const li1 = React.createElement("li", {}, "HTML");
// const li2 = React.createElement("li", {}, "CSS");
// const li3 = React.createElement("li", {}, "JavaScript");
// const ul = React.createElement(
//   "ul",
//   { fontSize: "30px", backgroundColor: "pink", color: "whitesmoke" },
//   [li1, li2, li3]
// );

// ReactDOM.render(ul,document.getElementById("root"))
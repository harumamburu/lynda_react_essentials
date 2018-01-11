"use strict";

var style = {
    backgroundColor: "orange",
    color: "white",
    fontFamily: "verdana"
};

var title = React.createElement("h1", // element to create
{ id: "title", className: "header", style: style }, // properties
"Helo World!" // child element
);
// pure react style
ReactDOM.render(title, // what to render
document.getElementById("react-container") // where to render
);
// babel style
ReactDOM.render(React.createElement(
    "h2",
    { id: "subtitle",
        style: { backgroundColor: "orange", color: "black", fontFamily: "verdana" } },
    "React is cool!"
), document.getElementById("title"));

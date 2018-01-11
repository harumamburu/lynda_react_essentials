const style = {
    backgroundColor: "orange",
    color: "white",
    fontFamily: "verdana"
}

const title = React.createElement(
    "h1",                                               // element to create
    { id: "title", className: "header", style: style }, // properties
    "Helo World!"                                       // child element
);

ReactDOM.render(
    title,                                     // what to render
    document.getElementById("react-container") // where to render
);

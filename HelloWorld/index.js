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
// pure react style
ReactDOM.render(
    title,                                     // what to render
    document.getElementById("react-container") // where to render
);
// jsx style
ReactDOM.render(
    <h2 id="subtitle"
        style={{backgroundColor: "orange", color: "black", fontFamily: "verdana"}}>
        React is cool!
    </h2>,
    document.getElementById("title")
);

// const heading = React.createElement("h1",
//      {id: "heading", xyz: "abc"}, "Hello React");

//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);

/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I am React Program</h1>
 *      </div>
 *       <div id = "child1">
 *          <h1> I am React Program</h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 */

const parent = React.createElement(
    "div",
     {id: "parent"},
     React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {}, "I am React"),
            React.createElement("h1", {}, "I am React")]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
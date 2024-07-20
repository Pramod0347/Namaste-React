import { createElement } from "react";
import ReactDOM from "react-dom/client";

const heading = createElement(
    "h1",
    {
        id: "title",
        key: "h1"
    },
    "Heading 1"
);

const heading2 = createElement(
    "h2",
    {
        id: "title",
        key: "h2"
    },
    "Heading 2"
);

const container = createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

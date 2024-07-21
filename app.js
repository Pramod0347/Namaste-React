import React from "react";
import ReactDOM from "react-dom/client";

// React Element - JSX
const heading = (
    <h1 id="title" key="h1">Namaste React</h1>
);

const Title = () => (
    <h3 id="title" key="h3">Namaste Title</h3>
);

// React Component
//- Functional [New]
const HeaderComponent = () => {
    return (
        <div>
            {heading}
            {Title()} 
            <Title />
            <h2>Namaste React from functional Component</h2>
        </div>
    );
} 




const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(<HeaderComponent />);


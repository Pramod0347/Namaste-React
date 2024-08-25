import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// Named Import
//import { Title } from "./components/Header";

// React Component
//- Functional [New]

// <> </> == React.Fragment

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(<AppLayout />);

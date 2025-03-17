import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About-us"));


// Named Import
//import { Title } from "./components/Header";

// React Component
//- Functional [New]


// <> </> == React.Fragment

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshay Saini",
    email: "support@namastedev.com",
  });

  return (
    <>
      <UserContext.Provider value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <>
                <Profile name={"Pramod"} />
                <ProfileClass name={"Pramod Class"} />
              </>
            )
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurantDetails/:id",
        element: <RestaurantDetails />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(<RouterProvider router={appRouter} />);
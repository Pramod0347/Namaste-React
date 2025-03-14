import { Outlet } from "react-router-dom";

const About = () =>{
    return(
        <div>
            <h1>This is the About Us Page</h1>
            <p>Finding the Path</p>
            <Outlet />
        </div>
    )
}

export default About;
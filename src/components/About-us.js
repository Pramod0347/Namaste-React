import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
const About = () =>{
    return(
        <div>
            <h1 className="text-5xl text-red-600">This is the About Us Page</h1>
            <UserContext.Consumer>
                {({ user }) => (
                    <h4 className="font-bold text-xl p-10">
                    {user.name}- {user.email}
                    </h4>
                )}
            </UserContext.Consumer>
            <p>Finding the Path</p>
            <Outlet />
        </div>
    )
}

export default About;
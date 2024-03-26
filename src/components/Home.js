import React from "react";
import {useNavigate} from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../components/css.css"
import img1 from "../assests/img1.png"
import img2 from "../assests/img2.png"
import img3 from "../assests/img3.png"


const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignOut = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="wrapper">
      <div className="formwrapper h-wrapper">
      <span><img className="img1" src={img1} alt="ellipse" /></span>
      <span><img className="img2" src={img2} alt="ellipse" /></span>
      <p>Welcome Back!,<br></br>Happy to see you again!..</p>
      {token ? (
        <div>
          <button className="h-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button className="button" onClick={handleSignIn}>SignIn</button>
          <button className="button" onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
      <span><img className="img3" src={img3} alt="ellipse" /></span>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/css.css"
import img1 from "../assests/img1.png"
import img2 from "../assests/img2.png"
import img3 from "../assests/img3.png"
// import img4 from "../assests/img4.png"

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("signin clicked")
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const authenticateUser = userCredential.user;
      const idToken = await authenticateUser.getIdToken(true);
      console.log(authenticateUser);
      localStorage.setItem("token", idToken);
      setemail("")
      setpassword("")
      navigate('/')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <form className="formwrapper" >
      <span><img className="img1" src={img1} alt="ellipse" /></span>
      <span><img className="img2" src={img2} alt="ellipse" /></span>
        <h2 className="header">Sign In</h2>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Sign in
        </button>
        <span><img className="img3" src={img3} alt="ellipse" /></span>
        {/* <span><img className="img4" src={img4} alt="ellipse" /></span> */}
        <p className="footer-text">I'm a new user.<Link className="link-text " to={"/signup"}>Sign Up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;

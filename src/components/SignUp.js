import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/css.css"
import img1 from "../assests/img1.png"
// import img2 from "../assests/img2.png"
import img3 from "../assests/img3.png"
// import img4 from "../assests/img4.png"

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
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
      <h2 className="header">Create Account</h2>
      <span><img className="img1" src={img1} alt="ellipse" /></span>
      {/* <span><img className="img2" src={img2} alt="ellipse" /></span> */}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="enter your password"
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <span><img className="img3" src={img3} alt="ellipse" /></span>
        <p className="footer-text">I'm already a member.<Link className="link-text" to={"/signin"}>Sign In</Link></p>
      </form>
      
    </div>
  );
};

export default SignUp;

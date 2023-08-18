/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import OlxLogo from "../../assets/OlxLogo";
import "./Signup.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/FirebaseContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {useFormik} from 'formik'

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext); 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && email && phone && password){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          let user = userCredential.user;
          updateProfile(auth.currentUser, { displayName: username }).then(() => {
            console.log(user.displayName, "hyyyy");
            console.log(user);
            firebase
              .firestore()
              .collection("users")
              .add({
                id: user.uid,
                name: username,
                phone: phone,
              })
              .then(() => {
                navigate("/login");
              });
          });
          // ...
        }
      );
    }else{
      setError("All fields are required")
    }
  };
 
  

  return (
    <div className="main-div">
      <div className="content-div">
        
        <div className="border-form">
            
          <form onSubmit={handleSubmit}>
            <div className="logo">
              <OlxLogo />
            </div>
            <div className="heading">
              <h4>Create Account</h4>
            </div>
            <div>
              <input
                className="email"
                type="text"
                placeholder="Username.."
                id="name"
                name="name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />  
            </div>
            <div>
              <input
                className="email"
                type="email"
                placeholder="Email.."
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="email"
                type="tel"
                placeholder="Phone no.."
                id="Phone"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="email"
                type="password"
                placeholder="Password.."
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <p>{error?error:""}</p>
            </div>
            <div>
              <button type="submit" className="btn">
                Signup
              </button>
            </div>
          </form>
         
          <div className="last-text">
            <p>
              Your email is never shared with external parties nor do we use it
              to spam you in any way.
            </p>
            <a onClick={()=>navigate('/login')} style={{cursor:'pointer',fontSize:'15px'}}>Login</a>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Signup;

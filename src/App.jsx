import { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Crete from "./pages/Crete";
import Views from "./pages/Views";
import Post from "./store/PostContext";
import { AuthContext } from "./store/FirebaseContext";
// import { FirebaseContext } from "./store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from 'react';

function App() {
  const { user, setUser } = useContext(AuthContext);
  // const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(
      auth,
      (user) => {
        console.log("app", user);
        setUser(user);
      },
      []
    );
  });
  console.log(user, "noooo");
  return (
    <BrowserRouter>
      <div className="container1">
        <Post>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/create-post" element={<Crete />} />
            <Route path="/view" element={<Views />} />
          </Routes>
        </Post>
      </div>
    </BrowserRouter>
  );
}

export default App;

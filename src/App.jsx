import React, { useState, useEffect } from "react";
import { Loginpage } from "./assets/components/loginpage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "./assets/components/signupPage";
import { Navbar } from "./assets/components/navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ProtectedRoute } from "./assets/components/protectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/navbar"
            element={
              <ProtectedRoute user={user}>
                <Navbar></Navbar>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useEffect } from "react";
import "./App.scss";
import HomeScreen from "../src/screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../src/screens/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/userSlice/userSlice";
import { auth } from "./config/firebase";

function App() {
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <div className="app">
        {!user ? (
          <LoginScreen />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;

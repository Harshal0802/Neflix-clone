import { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import LoginScreen from "../src/screens/LoginScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice/userSlice";
import { auth } from "./config/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
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
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;

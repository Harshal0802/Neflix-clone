import "./App.scss";
import HomeScreen from "../src/screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../src/screens/LoginScreen";

function App() {
  const user = null;
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

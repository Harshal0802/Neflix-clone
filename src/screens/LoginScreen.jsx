import { useState } from "react";
import "./LoginScreen.scss";
import NetflixImage from "../assets/netfliximage.png";
import SignUpScreen from "../screens/SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login_background">
        <img className="login_logo" src={NetflixImage} alt="" />
        <button onClick={() => setSignIn(true)} className="login_button">
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;

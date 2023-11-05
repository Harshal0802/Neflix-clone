import { useSelector } from "react-redux";
import "./ProfileScreen.scss";
import Navbar from "../components/Navbar";
import Avatar from "../assets/avatar.jpg";
import { selectUser } from "../redux/userSlice/userSlice";
import { auth } from "../config/firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src={Avatar} alt="profile" />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <button
                className="profile_signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

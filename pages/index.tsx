import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleLogin = () => {
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        document.body.append(
          (document.createElement("p").textContent = JSON.stringify(
            response.authResponse
          ))
        );
      } else {
        FB.login(
          function (response) {
            if (response.authResponse) {
              console.log("Welcome!  Fetching your information.... ");
              FB.api("/me", {}, function (response: fb.User) {
                console.log("Good to see you, " + response.name + ".");
              });
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
          },
          { scope: "public_profile, instagram_basic, pages_show_list" }
        );
      }
    });
  };

  const handleLogout = () => {
    FB.logout((response) => {
      alert(response.status);
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLogin}>Login to Facebook</button>
      <button onClick={handleLogout}>Logout from Facebook</button>
    </div>
  );
};

export default Home;

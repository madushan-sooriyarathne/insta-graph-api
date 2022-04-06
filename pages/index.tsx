import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleClick = () => {
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        document.body.append(
          (document.createElement("p").textContent = JSON.stringify(
            response.authResponse
          ))
        );
      } else {
        FB.login(function (response) {
          if (response.authResponse) {
            console.log("Welcome!  Fetching your information.... ");
            FB.api("/me", {}, function (response: fb.User) {
              console.log("Good to see you, " + response.name + ".");
            });
          } else {
            console.log("User cancelled login or did not fully authorize.");
          }
        });
      }
    });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Share on FB</button>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import Styles from "./Home.module.scss";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider";

const Home = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={theme.isDarkTheme ? Styles.homeDark : Styles.homeLight} data-testid="home">
      <section className={Styles.welcomeCard}>
        <h1>Welcome Home</h1>
        <h1>{user.name}</h1>
      </section>
    </div>
  );
};

export default Home;

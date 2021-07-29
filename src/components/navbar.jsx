import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../css/navbar.module.css";
import { Status } from "./status";
export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const Login = isAuth ? "Logout" : "Login";
  return (
    <>
      <div className={styles.shadow}>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li onClick={toggleAuth}>{Login}</li>
          </ul>
        </nav>
      </div>
      <Status />
    </>
  );
};

import axios from "axios";
import styles from "../css/form.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Form = () => {
  const { toggleAuth, updateLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const logindata = {
      email: e.target[0].value,
      password: e.target[1].value
    };
    axios
      .post("https://reqres.in/api/login", logindata)
      .then(({ data }) => {
        const payload = {
          ...logindata,
          token: data.token
        };
        updateLogin(payload);
        toggleAuth();
      })
      .catch();
  };
  return (
    <div className={styles}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

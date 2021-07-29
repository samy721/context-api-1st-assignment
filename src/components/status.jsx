import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Form } from "./form";
export const Status = () => {
  const { isAuth, userData } = useContext(AuthContext);

  return (
    <>
      {isAuth === false ? (
        <Form />
      ) : (
        <div>
          <p>user-email {userData.email}</p>
          <p>user-password {userData.password}</p>
          <p>user-token {userData.token}</p>
        </div>
      )}
    </>
  );
};

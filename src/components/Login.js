import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useSelector } from "react-redux";

const Login = () => {
  // is used to modify the value of the redux store
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);



  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Ahmad", age: "40", email: "Ahmad@gmail.com" })
          );
        }}
      >
        Click me to login
      </button>
      <div style={{ margin: "50px" }}>
        {user.email === "Ahmad@gmail.com" ? (
          <>
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;

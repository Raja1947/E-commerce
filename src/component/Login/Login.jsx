import React from "react";
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.login_container}>
      <div className={style.login}>
        <h1>Login Form</h1>
        <form>
          <div>
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder="Enter password" />
          </div>
          <div className={style.login_pass}>
            <span className={style.showPassword}>
              <input type="checkbox" />
              Show Password
            </span>
            <span className={style.forgot}>Forgot Password?</span>
          </div>
          <div>
            <button>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import { useContext, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom"
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
//   const { isFetching, dispatch } = useContext(AuthContext);

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );
//   };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Apple store</h3>
          <span className="loginDesc">
            you can by your dreams phone with beast cost
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            {/* onSubmit={handleClick} */}
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >
{/* disabled={isFetching} */}
                 Login

              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )} */}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="./Register">
            <button className="loginRegisterButton">
                Creat new Account
              {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )} */}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
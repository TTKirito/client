import react, { useEffect, useState } from "react";
import "./styles/index.css";
import { LoginResponse } from "../../types";
import { useNavigate } from "react-router-dom";
import { ApiCall, usePost } from "../../../../lib/api";



interface Error {
  username: string | null;
  password: string | null;
}

export const FormLogin = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<Error>({
    username: null,
    password: null,
  });
  const [handerrr, setHanderrr] = useState<string>()
  const [fetch, state] = usePost<LoginResponse, {username: string, password: string}>(ApiCall.LoginUser)
  let navigate = useNavigate();

  useEffect(() => {
    if (state.error) {
      setHanderrr(state.error.message)
    }
 
    if (state.data) {
      localStorage.setItem("access_token", state.data.assess_token)
      localStorage.setItem("username", state.data.user.username)
      navigate(0)
    }
  }, [state])

  useEffect(() => {
   
  }, [username, password, error])

  const handlerOnChangeUsername = (value: string) => {
    const errValue: Error = {
      username: null,
      password: null,
    };

    if (!value) {
      errValue["username"] = "username is required";
    }


    if (value && (value.length < 3 || value.length > 100)) {
      errValue["username"] = "username must contain 3 - 100 characters";

    }

    setError(errValue);
    setUsername(value)
  }

  const handlerOnChangePassword = (value: string) => {
    const errValue: Error = {
      username: null,
      password: null,
    };

    if (!value) {
      errValue["password"] = "password is required";
    }

    if (value && (value.length < 6 || value.length > 200)) {
      errValue["password"] = "password must contain 6 - 200 characters";

    }

    setError(errValue);
    setPassword(value)
  }

  const handlerOnSubmit = async (event: any) => {
    event.preventDefault();
    const errValue: Error = {
      username: null,
      password: null,
    };

    if (!username) {
      errValue["username"] = "username is required";
    }

    if (!password) {
      errValue["password"] = "password is required";
    }

    setError(errValue);
    if (username && password) {
      fetch({username, password})
    }
  };

  return (
    <form className="login-form" onSubmit={(e) => handlerOnSubmit(e)}>
      <label className="login-form__label">
        <div>user name</div>
        <input
          type="text"
          name="username"
          placeholder="Eg. johndoe"
          className="login-form__input"
          style={error.username ? { border: "1px solid red" } : {}}
          onChange={(e) => handlerOnChangeUsername(e.target.value)}
        />
        <div className="login-form__error">{error.username}</div>
      </label>
      <label className="login-form__label">
        <div>Password</div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="login-form__input"
          onChange={(e) => handlerOnChangePassword(e.target.value)}
          style={error.password ? { border: "1px solid red" } : {}}
        />
        <div className="login-form__error">{error.password}</div>
      </label>
      <div className="login-form__error">{handerrr}</div>
      <input type="submit" value="Login" className="login-form__submit" />
    </form>
  );
};

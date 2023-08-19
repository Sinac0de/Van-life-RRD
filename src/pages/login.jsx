import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";

export const loginLoader = ({ request }) => {
  //we could also use searchParams in the RRD library
  return new URL(request.url).searchParams.get("message");
};

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  //get the message params
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch((err) => setError(err))
      .finally(setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>Log in</button>
      </form>
    </div>
  );
};

export default Login;

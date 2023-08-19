import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const loginLoader = ({ request }) => {
  //we could also use searchParams in the RRD library
  return new URL(request.url).searchParams.get("message");
};

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  //get the message params
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    loginFormData({
      email: "",
      password: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 style={{ color: "red" }}>{message}</h2>}
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
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

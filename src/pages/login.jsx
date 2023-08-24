import { useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export const loader = ({ request }) => {
  //we could also use searchParams in the RRD library
  return new URL(request.url).searchParams.get("message");
};

export async function action() {
  console.log("Login Action function");
  return null;
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  //get the message params
  const message = useLoaderData();
  const navigate = useNavigate();
  //useNavigate does the same as the <Navigate /> but in the non-jsx format

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        navigate("/host");
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
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
      <Form method="post" className="login-form">
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
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "login"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

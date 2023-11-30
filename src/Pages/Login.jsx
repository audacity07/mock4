import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/Authentication/action";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch(loginUser(obj)).then(() => alert("Logged In Successfully"));
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

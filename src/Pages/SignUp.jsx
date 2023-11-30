import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/Authentication/action";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      username,
      email,
      password,
      avatar,
    };
    dispatch(registerUser(obj)).then(() => alert("Registered Successfully"));
    setEmail("");
    setUsername("");
    setAvatar("");
    setPassword("");
  }

  return (
    <>
      <h1>SignUp Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
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
        <input
          type="text"
          placeholder="avatar"
          onChange={(e) => setAvatar(e.target.value)}
          value={avatar}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

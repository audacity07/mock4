import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav
      style={{
        display: "flex",
        width: "30%",
        margin: "20px auto",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Signup</Link>
      <Link to={"/forum"}>Forum</Link>
    </nav>
  );
}

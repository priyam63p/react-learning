import { Outlet,Link } from "react-router";
import Hi from "./Hi";
import Hello from "./Hello";

export default function Details() {
  return (
    <>
    <nav>
        <Link to="Hello">Hello</Link>
        <Link to="Hi">Hi</Link>
        <Link to="/Details">Details</Link>
    </nav>
      <h1>Welcome to Details Page</h1>
      <Outlet>
        <Link to="Hello"></Link>
        <Link to="Hi"></Link>
      </Outlet>
    </>
  );
}

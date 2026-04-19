import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |&nbsp;
      <NavLink to="/news">News</NavLink> |&nbsp;
      <NavLink to="/contact">Contact</NavLink> |&nbsp;
      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
}

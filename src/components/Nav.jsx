import { NavLink } from "react-router";
import { useThemeStore } from "../store/themeStore";

export default function NavBar() {

  const theme = useThemeStore((state) => state.theme);

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |&nbsp;
      <NavLink to="/news">News</NavLink> |&nbsp;
      <NavLink to="/contact">Contact</NavLink> |&nbsp;
      <NavLink to="/posts">Posts</NavLink> |&nbsp;
      <NavLink to="/level">Level</NavLink> |&nbsp;
      <NavLink to="/user">User</NavLink>
    </nav>
  );
}

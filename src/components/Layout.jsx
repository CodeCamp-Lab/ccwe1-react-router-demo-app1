import { Outlet, useNavigation, useLocation } from "react-router";
import Nav from "../components/Nav";

export default function Layout() {
  const navigation = useNavigation();
  const location = useLocation();
//   console.log(location);

  return (
    <div>
      <header>
        <h1 className="text-blue-500 font-bold">My App</h1>
      </header>
      <Nav />
      <hr />
      <main className="mt-10 border rounded-xl shadow-xl m-10 p-5 min-h-50">
        {/* <p>{location.pathname}</p> */}
        {navigation.state === "loading" ? <p class="animate-bounce">Loading...</p> : <Outlet />}
      </main>
    </div>
  );
}

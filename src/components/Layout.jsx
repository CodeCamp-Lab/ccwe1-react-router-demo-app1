import { Outlet, useNavigation, useLocation } from "react-router";
import Nav from "../components/Nav";
import { useThemeStore } from "../store/themeStore";

export default function Layout() {
  const navigation = useNavigation();
  // const location = useLocation();
  //   console.log(location);

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div className={theme} style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white'
    }}>
      <header>
        <h1 className="text-blue-500 font-bold">My App</h1>
      </header>
      <Nav />
      <hr />
      <div className="p-5">
        theme:{" "}
        <button onClick={toggleTheme} className="cursor-pointer">
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        {theme}
      </div>
      <main className="mt-10 border rounded-xl shadow-xl m-10 p-5 min-h-50">
        {/* <p>{location.pathname}</p> */}
        {navigation.state === "loading" ? (
          <p class="animate-bounce">Loading...</p>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

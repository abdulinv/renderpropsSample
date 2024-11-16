import { Link, Outlet } from "react-router-dom";

const navItems = [
  {
    title: "Posts",
    to: "/posts",
  },
  {
    title: "Users",
    to: "/users",
  },
  {
    title: "Home",
    to: "/",
  },
];
export function Layout() {
  return (
    <div>
      <h1>Welcome to the example which uses the react router lib</h1>
      <nav>
        <ul className="nav-bar">
          {navItems.map((item) => (
            <Link key={item.title} to={item.to}>
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

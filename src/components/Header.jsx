import { Container, Logo, LogoutBtn } from "./index";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50 w-full overflow-x-hidden">
      <Container>
        <nav className="flex items-center justify-between py-3 px-4 sm:px-0">

          {/* Logo  */}
          <Link
            to="/"
            className="hover:opacity-80 active:scale-95 transition-all duration-200 ease-in-out shrink-0"
          >
            <Logo width="180px" />
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-1 md:gap-3 overflow-hidden">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="shrink-0">
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`
                        relative text-sm font-semibold px-3 md:px-4 py-2 rounded-lg
                        transition-all duration-200 whitespace-nowrap
                        ${
                          location.pathname === item.slug
                            ? "text-purple-600 bg-indigo-100 shadow-sm"
                            : "text-gray-600 hover:bg-indigo-50 hover:text-purple-600"
                        }
                      `}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
        
            {authStatus && userData && (
    <div className="flex items-center gap-3 mr-4">
        <div className="flex flex-col items-end sm:flex">
            <span className="text-sm font-semibold text-gray-800 leading-none">
                {userData.name}
            </span>
            <span className="text-[10px] text-green-600 font-medium">Online</span>
        </div>
        
        {/* Profile Icon / Avatar */}
        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md border-2 border-white">
            {userData.name?.charAt(0).toUpperCase() || "U"}
        </div>
    </div>
)}

            {/* Logout */}
            {authStatus && (
              <li className="ml-2 border-l pl-4 border-gray-200 shrink-0">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

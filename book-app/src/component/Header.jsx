import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, logoutAuth } = useContext(AuthContext);
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4">
        <Link className="cursor-pointer" to="/">
          <img className="w-10 sm:w-12" src="/book.png"></img>
        </Link>
        <a href="">Books</a>
        <a href="">Author</a>
      </div>
      <div className="flex items-center gap-4">
        {user?.valid ? (
          <p>{user?.fullName} </p>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {user?.valid && (
          <p
            className="cursor-pointer font-bold text-zinc-400"
            onClick={() => logoutAuth()}
          >
            {" "}
            Logout
          </p>
        )}
        <Link to="/search">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faMagnifyingGlass}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

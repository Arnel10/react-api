import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

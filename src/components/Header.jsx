import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Header = ({ links }) => {
  //sticky header with logo with tailwind
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <SideBar></SideBar>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

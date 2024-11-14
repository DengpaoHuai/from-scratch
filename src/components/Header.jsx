import { Link } from "react-router-dom";

const Header = () => {
  //sticky header with logo with tailwind
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

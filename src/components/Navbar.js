import { Link } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="bg-gray-700 w-[80%] mx-auto rounded-md mb-5 text-white shadow-md shadow-slate-900">
      <div className="flex justify-evenly py-2 text-lg">
        <Link to={'/'}>Pokedex</Link>
        <Link to={'/'}>Abilities</Link>
        <Link to={'/'}>Moves</Link>
        <Link to={'/'}>Types</Link>
        <form className="flex items-center relative">
          <input
            className="rounded-md px-2 text-md"
            type="search"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-2 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

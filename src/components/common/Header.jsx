import { FaCloud } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-300 flex justify-between items-center px-4 h-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <FaCloud className="text-yellow-400 text-2xl" />
      </div>

      {/* Title Section */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Untitled Fiddle</span>
        <IoMdArrowDropdown className="text-lg" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="bg-yellow-400 text-black font-medium py-1 px-3 rounded hover:brightness-110">Run</button>
        <button className="bg-gray-200 border border-gray-300 py-1 px-3 rounded hover:bg-gray-300">Go PRO</button>
      </div>
    </header>
  );
};

export default Header;

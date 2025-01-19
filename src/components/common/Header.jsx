const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-gray-700 sticky top-0">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="text-orange-500" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </div>
          <span className="text-gray-400">Untitled fiddle</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-1 text-white bg-orange-500 rounded hover:bg-orange-600">
          Run
        </button>
        <button className="px-4 py-1 text-orange-500 border border-orange-500 rounded hover:bg-orange-500/10">
          Go PRO
        </button>
      </div>
    </div>
  );
};

export default Header;
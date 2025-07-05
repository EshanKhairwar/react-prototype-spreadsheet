const Topbar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full border-b bg-white px-4 py-2 flex items-center justify-between shadow-sm text-sm">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-gray-500">
          <span>Workspace</span>
          <span>{'>'}</span>
          <span>Folder 2</span>
          <span>{'>'}</span>
        </div>
        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
      </div>

      {/* Center toolbar */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black">Tool bar ▸</button>
        <button className="text-gray-600 hover:text-black">🙈 Hide fields</button>
        <button className="text-gray-600 hover:text-black">⇅ Sort</button>
        <button className="text-gray-600 hover:text-black">🔍 Filter</button>
        <button className="text-gray-600 hover:text-black">🗂 Cell view</button>
      </div>

      {/* Right: Search, Notifications, Avatar */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search within sheet"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-1 rounded text-sm placeholder-gray-400 w-48"
        />
        <div className="relative">
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full px-1">2</span>
          <button className="text-gray-600 hover:text-black text-lg">🔔</button>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="hidden md:block text-gray-700 text-sm">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-gray-500">john.doe@example.com</div>
          </div>
        </div>
        <button className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800">
          New Action
        </button>
      </div>
    </div>
  );
};

export default Topbar;

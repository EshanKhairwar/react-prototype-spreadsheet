import { useState } from "react";
import TopBar from "./components/TopBar";
import Spreadsheet from "./components/Spreadsheet";



const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top navigation bar */}
      <TopBar />

      {/* Main spreadsheet/table */}
      <main className="p-4">
        <Spreadsheet searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </main>
    </div>
  );
};

export default App;

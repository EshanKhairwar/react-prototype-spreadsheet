import { useState } from "react";

import Spreadsheet from "./Spreadsheet";
import Topbar from "./TopBar";

const SheetPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <Topbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Spreadsheet searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SheetPage;

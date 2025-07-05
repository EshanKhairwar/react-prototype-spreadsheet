import React, { useState } from "react";
import Topbar from "./Topbar";
import Spreadsheet from "./Spreadsheet";

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

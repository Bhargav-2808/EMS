import React, { useState } from "react";

const EmployeeSearch = () => {
  const [filterText, setFilterText] = useState("");

  return (
    <input
      type="text"
      value={filterText}
      placeholder="Search..."
      className="search"
    />
  );
};

export default EmployeeSearch;

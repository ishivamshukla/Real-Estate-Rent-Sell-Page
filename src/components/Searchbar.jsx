import React from "react";
import Select from "react-select";

const options = [
  { value: "option-1", label: "Option 1" },
  { value: "option-2", label: "Option 2" },
  { value: "option-3", label: "Option 3" },
];

function Searchbar() {
  const styles = {
    fontSize: 14,
    color: "blue",
  };

  return (
    <div className="search-container">
      <div className="search-title">
        <h1> Search Properties to Rent</h1>
      </div>
      <div className="search-filter">
        <Select
          options={options}
          placeholder={"Search with Search Bar"}
          style={styles.select}
        />
      </div>
    </div>
  );
}

export default Searchbar;

import React from "react";

function Filter() {
  return (
    <div className="filter">
      <div className="filter-item">
        <div class="filter-card">
          <p>Location</p>
          <h1>New York, USA</h1>
        </div>
      </div>
      <div className="filter-item">
        <div class="filter-card">
          <p>When</p>
          <h1>Select Move-in Date</h1>
        </div>
      </div>
      <div className="filter-item">
        <div class="filter-card">
          <p>Price</p>
          <h1>$500-$2,500</h1>
        </div>
      </div>
      <div className="filter-item">
        <div class="filter-card">
          <p>Property Type</p>
          <h1>Houses</h1>
        </div>
      </div>
      <div className="filter-item">
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Filter;

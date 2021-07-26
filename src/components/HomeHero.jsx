import React from "react";

const HomeHero = () => {
  return (
    <div className="home-hero">
      <h1 className="search-header">Indian Community Of Nomads</h1>
      <div className="input-group input-group-lg mb-5 search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search for travel blogs, trek blogs or photo blogs"
        />
        <button className="btn btn-dark" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomeHero;

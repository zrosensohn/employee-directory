import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search mt-5">
      <div className="form-group">
        <label htmlFor="employee">Search Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Type in a name to search"
          id="nameSearch"
        />
      </div>
    </form>
  );
}

export default SearchForm;

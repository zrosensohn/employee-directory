import React from "react";
import "./style.css";

function EmployeeList(props) {
  return (
    <table className="table table-striped mt-5 employeeDirectoryTable">
      <thead>
        <tr>
          <th className="empPhoto" scope="col">Picture</th>
          <th className="empFName" scope="col">
            <i 
              id="firstNameSort"
              data-sort="asc"
              onClick={props.handleSortFirstName}
              className="fas fa-sort-alpha-down mr-2">
            </i>
            First Name
          </th>
          <th className="empLName" scope="col">
            <i 
              id="lastNameSort"
              data-sort="asc"
              onClick={props.handleSortLastName}
              className="fas fa-sort-alpha-down text-secondary mr-2">
            </i>
            Last Name
          </th>
          <th className="empEmail" scope="col">Email</th>
          <th className="empPhone" scope="col">Phone</th>
          <th className="empCell" scope="col">Cell</th>
          <th className="empAddress" scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr key={result.id.value}>
            <td><img alt="" src={result.picture.medium} className="" /></td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.phone}</td>
            <td>{result.cell}</td>
            <td>
              <div>{result.location.street.number} {result.location.street.name}</div>
              <div>{result.location.city}, {result.location.state} {result.location.postcode}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;

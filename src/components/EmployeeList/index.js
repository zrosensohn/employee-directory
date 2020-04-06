import React from "react";
import "./style.css";

function EmployeeList(props) {
  return (
    <table className="table table-striped mt-5 employeeDirectoryTable">
      <thead>
        <tr>
          <th className="empPhoto" scope="col">Picture</th>
          <th className="empFName" scope="col"><span onClick={props.handleSortFirstName}>^ </span>First Name</th>
          <th className="empLName" scope="col">Last Name</th>
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

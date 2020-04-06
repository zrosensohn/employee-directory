import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import EmployeeList from '../../components/EmployeeList';

class Directory extends Component {

  state = {
    results: [],
    error: ''
  }

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res)
        if (res.error) {
          throw new Error(res.error);
        }
        this.setState({ results: res.data.results, error: ''});
        console.log(this.state);
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.error});
        console.log(this.state);
      });
  }

  handleSortFirstName = () => {

    let sortedArr = this.state.results.sort(function(a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ results: sortedArr});
  }

  render() {
    return (
      <EmployeeList 
        results = {this.state.results}
        handleSortFirstName = {this.handleSortFirstName}
      />
    );
  }
}

export default Directory;
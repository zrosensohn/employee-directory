import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import EmployeeList from '../../components/EmployeeList';
import SearchForm from '../../components/SearchForm';
import { ascSortFirstName, descSortFirstName, ascSortLastName, descSortLastName } from './sortingFunctions';

class Directory extends Component {

  state = {
    results: [],
    originalResults: [],
    error: ''
  }

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res)
        if (res.error) {
          throw new Error(res.error);
        }
        let results = ascSortFirstName(res.data.results);
        this.setState({ results: results, originalResults: results, error: ''});
        console.log(this.state);
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: err.error});
        console.log(this.state);
      });
  }

  handleSortFirstName = (event) => {
    console.log(event.target);
    let sortedArr;

    if(event.target.dataset.sort === 'desc') {
      console.log('Descending');
      sortedArr = descSortFirstName(this.state.results);
    } else {
      console.log("Ascending");
      sortedArr = ascSortFirstName(this.state.results);
    }

    this.setState({ results: sortedArr});
  }

  handleSortLastName = (event) => {
    console.log(event.target);
    let sortedArr;

    if(event.target.dataset.sort === 'desc') {
      console.log('Descending');
      sortedArr = descSortLastName(this.state.results);
    } else {
      console.log("Ascending");
      sortedArr = ascSortLastName(this.state.results);
    }

    this.setState({ results: sortedArr});
  }

  handleInputChange = (event) => {
    console.log(event.target.value);

    if (event.target.value.length > 0) {
      let array = this.state.originalResults.filter(employee => {
        return employee.name.first.toUpperCase().includes(event.target.value.toUpperCase()) 
            || employee.name.last.toUpperCase().includes(event.target.value.toUpperCase())
      });
      this.setState({ results: array});
    } else {
      this.setState({ results: this.state.originalResults});
    }
  }

  render() {
    return (
      <div>
        <SearchForm handleInputChange = {this.handleInputChange} />
        <EmployeeList 
        results = {this.state.results}
        handleSortFirstName = {this.handleSortFirstName}
        handleSortLastName = {this.handleSortLastName}
      />
      </div>

    );
  }
}

export default Directory;
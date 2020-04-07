import React, { Component } from 'react';
import './style.css';
import API from '../../utils/API';
import EmployeeList from '../../components/EmployeeList';
import SearchForm from '../../components/SearchForm';
import { ascSortName, descSortName, changeAscIcon, changeDescIcon } from './sortingFunctions';

class Directory extends Component {

  state = {
    results: [],
    originalResults: [],
    error: ''
  }

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        if (res.error) {
          throw new Error(res.error);
        }
        let results = ascSortName(res.data.results, 'first');
        this.setState({ results: results, originalResults: results, error: ''});
      })
      .catch(err => {
        this.setState({ error: err.error});
      });
  }

  handleSortFirstName = (event) => {
    let sortedArr;
    event.target.classList.remove('text-secondary');
    document.getElementById('lastNameSort').classList.add('text-secondary');


    if(event.target.dataset.sort === 'asc') {
      sortedArr = descSortName(this.state.results, 'first');
      changeAscIcon(event.target);
    } else {
      sortedArr = ascSortName(this.state.results, 'first');
      changeDescIcon(event.target);
    }

    this.setState({ results: sortedArr});
  }

  handleSortLastName = (event) => {
    let sortedArr;
    event.target.classList.remove('text-secondary');
    document.getElementById('firstNameSort').classList.add('text-secondary');

    if(event.target.dataset.sort === 'asc') {
      sortedArr = descSortName(this.state.results, 'last');
      changeAscIcon(event.target);
    } else {
      sortedArr = ascSortName(this.state.results, 'last');
      changeDescIcon(event.target);
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
        <SearchForm 
        handleInputChange = {this.handleInputChange} 
        />
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
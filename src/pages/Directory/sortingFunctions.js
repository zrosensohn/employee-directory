module.exports = {

  ascSortName: (arr, sortKey) => {
    let sortedArr = arr.sort(function(a, b) {
      var nameA = a.name[sortKey].toUpperCase(); // ignore upper and lowercase
      var nameB = b.name[sortKey].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return sortedArr;
  },
  descSortName: (arr, sortKey) => {
    let sortedArr = arr.sort(function(a, b) {
      var nameA = a.name[sortKey].toUpperCase(); // ignore upper and lowercase
      var nameB = b.name[sortKey].toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return sortedArr;
  },
  changeAscIcon: (sortEl) => {
    sortEl.classList.remove('fa-sort-alpha-down');
    sortEl.classList.add('fa-sort-alpha-up');
    sortEl.removeAttribute('data-sort');
    sortEl.setAttribute('data-sort', 'desc');
  },
  changeDescIcon: (sortEl) => {
    sortEl.classList.remove('fa-sort-alpha-up');
    sortEl.classList.add('fa-sort-alpha-down');  
    sortEl.removeAttribute('data-sort');
    sortEl.setAttribute('data-sort', 'asc');
  }

}

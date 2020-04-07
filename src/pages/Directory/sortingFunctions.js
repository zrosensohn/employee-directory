module.exports = {

  ascSortFirstName: (arr) => {
    let sortedArr = arr.sort(function(a, b) {
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
    return sortedArr;
  },
  descSortFirstName: (arr) => {
    let sortedArr = arr.sort(function(a, b) {
      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
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
  ascSortLastName: (arr) => {
    let sortedArr = arr.sort(function(a, b) {
      var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
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
  descSortLastName: (arr) => {
    let sortedArr = arr.sort(function(a, b) {
      var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
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
  }

}

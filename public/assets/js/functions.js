$(() => {
  console.log('Document on Load');

  $('#firstNameSort').click(function() {
    
    $(this).removeClass('text-secondary');
    $('#lastNameSort').addClass('text-secondary');

    if($(this).hasClass('fa-sort-alpha-up')) {
      $(this).removeClass('fa-sort-alpha-up')
        .removeAttr('data-sort')
        .addClass('fa-sort-alpha-down')
        .attr('data-sort', 'asc');
    } else {
      $(this).removeClass('fa-sort-alpha-down')
        .removeAttr('data-sort')
        .addClass('fa-sort-alpha-up')
        .attr('data-sort', 'desc');
    }

  });

  $('#lastNameSort').click(function() {
    
    $(this).removeClass('text-secondary');
    $('#firstNameSort').addClass('text-secondary');

    if($(this).hasClass('fa-sort-alpha-up')) {
      $(this).removeClass('fa-sort-alpha-up')
        .removeAttr('data-sort')
        .addClass('fa-sort-alpha-down')
        .attr('data-sort', 'asc');
    } else {
      $(this).removeClass('fa-sort-alpha-down')
        .removeAttr('data-sort')
        .addClass('fa-sort-alpha-up')
        .attr('data-sort', 'desc');
    }

  });

});
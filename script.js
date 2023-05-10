// Adds event listener to save user input
$(function () {
  $('.saveBtn').on('click', function(){
    var timeBlock = parseInt($(this).parent().attr('id'))
    var task = $(this).parent().children().eq(1).val()
    localStorage.setItem(timeBlock, task)
  })

  // Calls the time block class and gives a function for each div containing this class
  $('.time-block').each(function(){
    var currentHour = dayjs().hour();
    var hour = parseInt($(this).attr('id'));

    // applies "past" class
       if (hour < currentHour){
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
   // applies "future" class
    } else if (hour > currentHour){
      $(this).addClass('future');
      $(this).removeClass('present');
      $(this).removeClass('past');
   // applies "present" class
    } else {
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
    }
  })

  // calls the 'description' class
  $('.description').each(function(){
    var timeBlock = parseInt($(this).parent().attr('id'))
    var description = localStorage.getItem(timeBlock)
    $(this).text(description)
  })

  // Gets the current day and displays it in the header
  var currentDay = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDay);
});
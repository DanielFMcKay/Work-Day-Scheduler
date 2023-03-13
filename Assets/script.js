

const currentDate = dayjs().format('dddd, MMMM DD YYYY, hh:mm a');
console.log(currentDate);
const currentDay = $('#currentDay');
currentDay.text(currentDate);



// The actual time applied to the scheduler needs to be in 24 hour-format to determina past/present/future
var thisHour = dayjs().format('HH');
console.log(thisHour);

var currentHour = parseInt(thisHour);
console.log(currentHour);

// as requested, everything is wrapped in a function that ensures the html is loaded before 
// the JQuery is called to run. I feel like there's probably an easier way to do that, but
// whatever. The time elements don't seem to interfere thankfully.


$(document).ready(function () {
var saveButton = $('.saveBtn');



saveButton.on('click', function () { 
  var yourText = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, yourText);
  console.log("the hour is ");
  console.log(hour);
});

// this is the saved data reload function
function renderTimeBlockTxt() {
  for (var i = 9; i < 17; i++) {
    $("#" + i + " .description").val(localStorage.getItem(i));
  }
}

// calls the saved data reload function
renderTimeBlockTxt();


// an exercise in Ctrl + D and cut-&-pasting
// checks each time block and assigns a color as needed
const hour9 = $('#9');
function colorHour9() {
  if (currentHour < 9) {
    hour9.addClass("future");
  } else if (currentHour === 9) {
    hour9.addClass("present");
  } else if (currentHour > 9) {
    hour9.addClass("past");
  }
}
colorHour9();

const hour10 = $('#10');
function colorHour10() {
  if (currentHour < 10) {
    hour10.addClass("future");
  } else if (currentHour === 10) {
    hour10.addClass("present");
  } else if (currentHour > 10) {
    hour10.addClass("past");
  }
}
colorHour10();

const hour11 = $('#11');
function colorHour11() {
  if (currentHour < 11) {
    hour11.addClass("future");
  } else if (currentHour === 11) {
    hour11.addClass("present");
  } else if (currentHour > 11) {
    hour11.addClass("past");
  }
}
colorHour11();

const hour12 = $('#12');
function colorHour12() {
  if (currentHour < 12) {
    hour12.addClass("future");
  } else if (currentHour === 12) {
    hour12.addClass("present");
  } else if (currentHour > 12) {
    hour12.addClass("past");
  }
}
colorHour12();

const hour13 = $('#13');
function colorHour13() {
  if (currentHour < 13) {
    hour13.addClass("future");
  } else if (currentHour === 13) {
    hour13.addClass("present");
  } else if (currentHour > 13) {
    hour13.addClass("past");
  }
}
colorHour13();

const hour14 = $('#14');
function colorHour14() {
  if (currentHour < 14) {
    hour14.addClass("future");
  } else if (currentHour === 14) {
    hour14.addClass("present");
  } else if (currentHour > 14) {
    hour14.addClass("past");
  }
}
colorHour14();


const hour15 = $('#15');
function colorHour15() {
  if (currentHour < 15) {
    hour15.addClass("future");
  } else if (currentHour === 15) {
    hour15.addClass("present");
  } else if (currentHour > 15) {
    hour15.addClass("past");
  }
}
colorHour15();

const hour16 = $('#16');
function colorHour16() {
  if (currentHour < 16) {
    hour16.addClass("future");
  } else if (currentHour === 16) {
    hour16.addClass("present");
  } else if (currentHour > 16) {
    hour16.addClass("past");
  }
}
colorHour16();

const hour17 = $('#17');
function colorHour17() {
  if (currentHour < 17) {
    hour17.addClass("future");
  } else if (currentHour === 17) {
    hour17.addClass("present");
  } else if (currentHour > 17) {
    hour17.addClass("past");
  }
}
colorHour17();

});


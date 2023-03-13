// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const currentDate = dayjs().format('dddd, MMMM DD YYYY, hh:mm a');
console.log(currentDate);
const currentDay = $('#currentDay');
currentDay.text(currentDate);

// below is purely a formatting test, to be commented out in final code
// const thisTime = dayjs().format('hh');
// console.log(thisTime);
// const timeTest = $('#timetest');
// timeTest.text(thisTime);

// The actual time applied to the scheduler needs to be in 24 hour-format to determina past/present/future
var thisHour = dayjs().format('HH');
console.log(thisHour);

var currentHour = parseInt(thisHour);
console.log(currentHour);

var saveButton = $('.saveBtn');


// somehow, this is probably easier than hardcoding everything for each hour field
var saveFields = [9,10,11,12,13,14,15,16,17];

// I can get away with the below because the id for each hour field is literally just the number
function saveTimeBlockTxt() {

  var saveField = JSON.parse(localStorage.getItem('hourstxt')) || [];
  var hour9txt=hour9.value.trim();
  var textHour = {
    hour9txt: hour9.value,
  }
  console.log(textHour);
  console.log("is textHour");

  saveField.push(textHour);
  localStorage.setItem('hourtxt', JSON.stringify(saveField));
}

// function colorSaveBlock(id) {
//   for (i = 9; saveField[i])
// }

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
colorHour9 ();

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
colorHour10 ();

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
colorHour11 ();

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
colorHour12 ();

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
colorHour13 ();

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
colorHour14 ();


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
colorHour15 ();

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
colorHour16 ();

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
colorHour17 ();



 saveButton.on('click', function () {
  
  event.preventDefault();

  saveTimeBlockTxt();



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

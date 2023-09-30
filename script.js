// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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
$(function () {
	let hours = [
		{ id: $("#hour-9"), value: 9, button: $("#hour-9").find("button") },
		{ id: $("#hour-10"), value: 10, button: $("#hour-10").find("button") },
		{ id: $("#hour-11"), value: 11, button: $("#hour-11").find("button") },
		{ id: $("#hour-12"), value: 12, button: $("#hour-12").find("button") },
		{ id: $("#hour-13"), value: 13, button: $("#hour-13").find("button") },
		{ id: $("#hour-14"), value: 14, button: $("#hour-14").find("button") },
		{ id: $("#hour-15"), value: 15, button: $("#hour-15").find("button") },
		{ id: $("#hour-16"), value: 16, button: $("#hour-16").find("button") },
		{ id: $("#hour-17"), value: 17, button: $("#hour-17").find("button") },
	];
	let currentDay = $("#currentDay");
	let currentTime = $("<p></p>");
	let currentHourValue = currentTime.text().slice(0, 2);
	setInterval(function () {
		let now = dayjs();
		let formattedDate = now.format("ddd, MMMM D");
		let currentHour = now.format("HH:mm:ss");

		currentDay.text(formattedDate);
		currentTime.text(currentHour);
		$("#currentDay").append(currentTime);
	}, 1000);

	hours.forEach((element) => {
		element.value < currentHourValue
			? element.id.addClass("past")
			: element.value == currentHourValue
			? element.id.addClass("present")
			: element.id.addClass("future");
	});

  hours.button.click(function (index) {
    localStorage.setItem(hours[index].value,)
  })
});

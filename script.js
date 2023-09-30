$(function () {
	let hours = [
		{
			id: $("#hour-9"),
			value: 9,
			button: $("#hour-9").find("button"),
			task: $("#hour-9").find("textarea"),
		},
		{
			id: $("#hour-10"),
			value: 10,
			button: $("#hour-10").find("button"),
			task: $("#hour-10").find("textarea"),
		},
		{
			id: $("#hour-11"),
			value: 11,
			button: $("#hour-11").find("button"),
			task: $("#hour-11").find("textarea"),
		},
		{
			id: $("#hour-12"),
			value: 12,
			button: $("#hour-12").find("button"),
			task: $("#hour-12").find("textarea"),
		},
		{
			id: $("#hour-13"),
			value: 13,
			button: $("#hour-13").find("button"),
			task: $("#hour-13").find("textarea"),
		},
		{
			id: $("#hour-14"),
			value: 14,
			button: $("#hour-14").find("button"),
			task: $("#hour-14").find("textarea"),
		},
		{
			id: $("#hour-15"),
			value: 15,
			button: $("#hour-15").find("button"),
			task: $("#hour-15").find("textarea"),
		},
		{
			id: $("#hour-16"),
			value: 16,
			button: $("#hour-16").find("button"),
			task: $("#hour-16").find("textarea"),
		},
		{
			id: $("#hour-17"),
			value: 17,
			button: $("#hour-17").find("button"),
			task: $("#hour-17").find("textarea"),
		},
	];

	const currentDay = $("#currentDay");
	const currentTime = $("<p></p>");
	let currentHourValue;

	// ---------------------function to set time and date in html-------------------
	setInterval(function () {
		let now = dayjs();
		let formattedDate = now.format("ddd, MMMM D");
		let currentHour = now.format("HH:mm:ss");

		currentDay.text(formattedDate);
		currentTime.text(currentHour);
		$("#currentDay").append(currentTime);
		currentHourValue = currentTime.text().slice(0, 2);
		// console.log(currentHourValue);
		// foreach that compares the current hour value to the agenda hour to change the background color of each task inside the agenda.
		hours.forEach((element) => {
			element.value < currentHourValue
				? element.id.removeClass("present future").addClass("past")
				: element.value == currentHourValue
				? element.id.removeClass("future").addClass("present")
				: element.value > currentHourValue
				? element.id.removeClass("past present").addClass("future")
				: "";
		});
	}, 1000);

	let savedTasks;
	const agendaTasksSave = (index) => {
		savedTasks = JSON.parse(window.localStorage.getItem("task")) || [];
		const tasks = hours[index].task.val();
		savedTasks.push(tasks);
		window.localStorage.setItem("task" + (index + 1), JSON.stringify(savedTasks));
	};

	// --------------function that executes agendaTasksSave when the button inside the hour section is clicked	-------------------
	hours.forEach((element, index) => {
		element.button.click(function () {
			agendaTasksSave(index);
		});
	});
	const displaySavedTasks = () => {
		hours.forEach((element, index) => {
			const savedTasks = JSON.parse(window.localStorage.getItem("task" + (index + 1))) || [];
			element.task.text(savedTasks.join(""));
		});
	};

	displaySavedTasks();
});

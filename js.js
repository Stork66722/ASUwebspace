///////////////////////////////////////////////////////
//               Richard Lahaie                      //
//       Final Project - JavaScript Trickery         //
///////////////////////////////////////////////////////

//Funtion add Title to main page and pull box shade css and add to main page image.
function welcomeFunc() {
	var welcomeNe = "Welcome to Running Nebraska!"
	document.getElementById("welcome-1").innerHTML = welcomeNe;
	//Dom change - creating var using querySelector and adding class to 1st element -adding shade to main page image
	let shade1 = document.querySelector(".forest-runner");
	shade1.classList.add('shade');
}

//Function to run and add map shade on Location page.
function mapShade() {
	//Dom change - creating var using querySelector and adding class to 1st element -adding shade to outer box
	let shade2 = document.querySelector(".map1");
	shade2.classList.add('shade');

	//Dom change - creating var using querySelector and adding class to 1st element -adding shade to outer box
	let shade3 = document.querySelector(".map2");
	shade3.classList.add('shade');

	//Dom change - creating var using querySelector and adding class to 1st element -adding shade to outer box
	let shade4 = document.querySelector(".map3");
	shade4.classList.add('shade');

	//Dom change - creating var using querySelector and adding class to 1st element -adding shade to outer box
	let shade5 = document.querySelector(".map4");
	shade5.classList.add('shade');
}

//Hover over 5k page link boxes. Changes colors with mouse over
function hoverFun() {
	//use of event listener and function to use mouse over event that changes background of element to different color.
	document.getElementById("5k").addEventListener("mouseover", function () {
		document.getElementById("5k").style.backgroundColor = "green";
	});
	//use of event listener and function to use mouse out event that changes background of element back to original color.
	document.getElementById("5k").addEventListener("mouseout", function () {
		document.getElementById("5k").style.backgroundColor = "";
	});
	//use of event listener and function to use mouse over event that changes background of element to different color.
	document.getElementById("longDistance").addEventListener("mouseover", function () {
		document.getElementById("longDistance").style.backgroundColor = "red";
	});
	//use of event listener and function to use mouse out event that changes background of element back to original color.
	document.getElementById("longDistance").addEventListener("mouseout", function () {
		document.getElementById("longDistance").style.backgroundColor = "";
	});
}

//Funtion to run group array and loop to create list within Groups page.
function runGroup() {
	//Groups array with 
	const groups = [
		"Run 402",
		"Lincoln Track Club",
		"Omaha Running Club",
		"Fleet Feet",
		"Road Runners Club of America",

	];
	//declare var of length groups array
	var groupsLength = groups.length;
	var table = document.getElementById("groups-list"); //find table element
	text = groups[0];
	//Perform For loop
	for (i = 0, text = ""; i < groupsLength; i++) {
		var row = table.insertRow(-1); //insert new row
		var cell = row.insertCell(0); //insert new cell into new row
		text += "<tr><td>" + groups[i] + "</td></tr>"; //add tr and td elements to table
		document.getElementById("groups-list").innerHTML = text; //adding arry to page
	}

	var header = table.createTHead(); //add an empty thead element and add it to the table
	var row = header.insertRow(0); //insert new row
	var cell = row.insertCell(0); //insert new cell into new row
	cell.innerHTML = "Local and National Groups"; //adding Header to head
}

//Function, that runs when button clicked on sign-up page.
function checkInfo() {

	var firstName = document.forms["richForm"]["firstName"].value; //First Name Variable using event listener pulling from form
	var lastName = document.forms["richForm"]["lastName"].value; //Last Name Variable using event listener pulling from form
	var EmailCred = document.forms["richForm"]["email"].value; //Email Variable using event listener pulling from form
	var mainContentHeight = 180; //Main Div height variable that can be added or used
	var errFn = 0; //set variable for first name error
	var errLn = 0; //set variable for last name error
	var errEm = 0; //set variable for email error
	var emailFmt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //set variable for regex email found at https://emailregex.com/

	//If statement checking on length of first name between 0 to 20 letters.
	if (firstName.length == 0 || firstName.length > 20) { //Display 2 messages if left empty or greater then 20 letters.
		document.getElementById("firstNameErr").style.display = "block";
		document.getElementById("firstNameErr2").style.display = "block";
		document.getElementById("mainContent").style.height = mainContentHeight + 20 + "px"; //adds additional height to form
		errFn = 1 //changes errFn variable to equal 1
	} else { //If correctly filled out, message will dispear or not appear. 
		document.getElementById("firstNameErr").style.display = "none";
		document.getElementById("firstNameErr2").style.display = "none";
	}
	//If statement checking on length of last name between 0 to 20 letters.
	if (lastName.length == 0 || lastName.length > 20) { //Display 2 messages if left empty or greater then 20 letters.
		document.getElementById("lastNameErr").style.display = "block";
		document.getElementById("lastNameErr2").style.display = "block";
		document.getElementById("mainContent").style.height = mainContentHeight + 20 + "px"; //adds additional height to form
		errLn = 1 //changes errLn variable to equal 1
	} else { //If correctly filled out, message will dispear or not appear. 
		document.getElementById("lastNameErr").style.display = "none";
		document.getElementById("lastNameErr2").style.display = "none";
	}
	//If statement checking to see if email entered matches regex variable condtion. If matches error message will not display
	if (EmailCred.match(emailFmt)) {
		document.getElementById("emailErr").style.display = "none";
		document.getElementById("emailErr2").style.display = "none";
	} else { //If not submitted as email format, error message shown.
		document.getElementById("emailErr").style.display = "block";
		document.getElementById("emailErr2").style.display = "block";
		document.getElementById("mainContent").style.height = mainContentHeight + 20 + "px"; //adds additional height to form
		errEm = 1 //changes errEn variable to equal 1
	}

	//If condition checks errFn, errLn, or errEm equal 1. Intial variables are 0, but will change depending on condtions met or not.
	//This prevents the 'Submit' button from processing and reseting error messages. 
	//Once all fields have been filled correctly, all varibles will equal 0 and return a true value, accepting form.
	if (errFn == 1 || errLn == 1 || errEm == 1) {
		return false;
	} else {
		return true;
	}
}
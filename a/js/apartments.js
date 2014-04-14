var $ = function (id) { 
	return document.getElementById(id); 
}

//variables to store input data into
var neigh, beds, baths, minRent, maxRent, moveIn, 
moveMonth, moveDay, moveYear;

//variable for current date
var curDate = new Date();
var curMonth = curDate.getMonth();
var curDay = curDate.getDate();
var curYear = curDate.getFullYear();


//variables to grab data from dom
var apartments;
var apartments_list = new Array();
var apart_count = 0;


//count how many instances of class "apartment" there are
var get_apartments = function () {
	var doc = document.getElementById("main")
	for (var i = 0; i < doc.childNodes.length; i++) {
	    if (doc.childNodes[i].className == "apartment") {
	      apart_count++;
	    }       
	}
	//get data for each of these instances
	get_apart_data(apart_count);
}


//get data from DOM
var get_apart_data = function(count) {

	//for each instance of class, grab ID of information line
	for(var i = 0; i < count; i++) {
		curNeigh = "neigh" + (i + 1).toString();
		curBed = "bed" + (i + 1).toString();
		curBath = "bath" + (i + 1).toString();
		curAvail = "avail" + (i + 1).toString();
		curRent = "rent" + (i + 1).toString();

		storeNeigh = document.getElementById(curNeigh).innerHTML;
		storeBed = document.getElementById(curBed).innerHTML;
		storeBath = document.getElementById(curBath).innerHTML;
		storeAvail = document.getElementById(curAvail).innerHTML
		storeRent = document.getElementById(curRent).innerHTML;

		//Break apart date
		storeMonth = storeAvail.substring(0, 2) - 1;
		storeDay = storeAvail.substring(3, 5);
		storeYear = storeAvail.substring(6, 10);

		//store all variable inside an array in an array
		apartments_list[i] = [storeNeigh, storeBed, storeBath, parseInt(storeRent), storeDay, storeMonth, storeYear];
			
	}

}

//get variables from form
var get_variables = function () {

	//grab neighboor hood value
	neigh = $("neighborhoods").value;
	
	//vaidates neighborhood selected
	if(neigh == "Select One") {
		alert("Please select a neighborhood.")
		return;
	}

	//grabs bed value
	if ($("bedroom0").checked) {
		beds = $("bedroom0").value;
	} else if ($("bedroom1").checked) {
		beds = $("bedroom1").value;
	} else if ($("bedroom2").checked) {
		beds = $("bedroom2").value;
	} else if ($("bedroom3").checked) {
		beds = $("bedroom3").value;
	} 

	//grabs bath value
	if ($("bathroom1").checked) {
		baths = $("bathroom1").value;
	} else if ($("bathroom2").checked) {
		baths = $("bathroom2").value;
	} else if ($("bathroom3").checked) {
		baths = $("bathroom3").value;
	} 

	//grab min and max rent values
	minRent = $("min").value;
	maxRent = $("max").value;
	
	//validates user enters a positive number for min rent
	if(isNaN(minRent) || minRent < 0) {
		alert("Please enter a positive value greater than or equal to 0 for Min Rent.");
		return;	
	}
	
	//validates user enter min rate
	if(minRent == "") {
		alert("Please enter a minimum rent rate.");
		return;	
	}

	//validates user enters a positive number for max rent
	if(isNaN(maxRent) || maxRent < 0) {
		alert("Please enter a positive value greater than or equal to 0 for Max Rent.");
		return;	
	}

	//validates user entered a max rent
	if(maxRent == "") {
		alert("Please enter a maximum rent rate.");
		return;	
	}

	//validates min is not larger than max
	if (minRent > maxRent) {
		alert("Please enter a Min Rent less than the Max Rent.");
		return;
	}
	
	//validates user entered a move in date
	moveIn = $("moveInDate").value;
	if(moveIn == "") {
		alert("Please enter a move in date (MM/DD/YYYY).");
		return;	
	}

	//validates move in date is in correct format
	var slash1 = moveIn.indexOf("/");
    var slash2 = moveIn.lastIndexOf("/");
    var length = moveIn.length;
	if(!(slash1 == 2 && slash2 == 5 && length == 10 )) {
		alert("Please enter a move in date in the correct format (MM/DD/YYYY).");
		return;		
	}
	
	//breaks up move in date into three separate variables	
	moveMonth = moveIn.substring(0, 2) - 1;
	moveDay = moveIn.substring(3, 5);
	moveYear = moveIn.substring(6, 10);
	
	//validates month is actually a correct month
	if (moveMonth <= -1 ||  moveMonth > 11) {
		alert("Please enter a correct month (MM/DD/YYYY).");
		return;	
	}
	
	//validate month has not past
	if(moveYear == curYear){
		if (moveMonth < curMonth) {
			alert("Please enter a correct month that has not passed.");
			return;	
			}
	}
	
	//validate day has not past if month given is current month
	if(moveMonth == curMonth) {
		if (moveDay < curDay){
			alert("Please enter a correct day that has not passed.");
			return;
		}
	}	
	
	//vaildate day given is a correct day
	if (moveDay == 0 ||  moveDay > 31) {
		alert("Please enter a correct day (MM/DD/YYYY).");
		return;	
	}
	
	//validate year is not in the past
	if (moveYear < curYear) {
		alert("Please enter a correct year that hasn't passed (MM/DD/YYYY).");
		return;	
	}
	
	//validate year is not more than 1 year away
	if (moveYear > (curYear + 1)) {
		alert("Sorry, we have no listings that far in advance.");
		return;	
	}
	
	//search the apartments
	search_aparts();

}

var search_aparts = function () {
	
	//unhide all apartments to rehide
	reset_aparts()
	
	for (var i = 0; i < apartments_list.length; i++) {
	
		//var to store idv apartment arrays in
		var apartment = apartments_list[i];
		
		//set ID numbering to hide div if not matching with search parameters
		var divId = "apart" + (i + 1).toString();
		
		//index numbering
		//0 = neigh, 1 = bed, 2 = bath, 3 = month, 4 = day, 5 = year, 6 = rent;

		//check neighborhoods
		if( neigh != "All"){
			if (neigh != apartment[0]){
				$(divId).style.display = "none";
			}
		}
		
		//check bedrooms
		if(apartment[1] < beds){
			$(divId).style.display = "none";
		}
		
		//check bathrooms
		if(apartment[2] < baths){
			$(divId).style.display = "none";
		}
		

		//check rent
		if ( !((apartment[3] >= minRent) && (apartment[3] <= maxRent)) ){
			$(divId).style.display = "none";
		}
		
		//check year
		if(moveYear == curYear) {
			if( apartment[5] > moveMonth) {
				$(divId).style.display = "none";
			}			
		}
		
		//check day
		if(apartment[5] == moveMonth){
			if( apartment[4] > moveDay) {
				$(divId).style.display = "none";
			}
		}

		
		//check year
		if( apartment[6] > moveYear) {
			$(divId).style.display = "none";
		}
		
		
	}
	
}

//put all apartments back
var reset_aparts = function () {
	for (var i = 0; i < apartments_list.length; i++) {
		var divId = "apart" + (i + 1).toString();				
		$(divId).style.display = "inline-block";	
	}

}


//do not do these until page loads
window.onload = function () {

	$("submit").onclick = get_variables;
	$("reset").onclick = reset_aparts;
	get_apartments();

} 
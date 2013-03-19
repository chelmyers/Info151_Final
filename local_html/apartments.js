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

// create array for each apartment. Index values equal :
// 0 = neigh, 1 = bed, 2 = bath, 3 = month, 4 = day, 5 = year, 6 = rent;
var apart1 = ["Rittenhouse Square", 0, 1, 3, 01, 2013, 1250];
var apart2 = ["University City", 1, 1, 5, 1, 2013, 1520];
var apart3 = ["Washington Square", 2, 2.5, 6, 01, 2013, 3700];
var apart4 = ["Old City", 2, 2, 6, 01, 2013, 3400];
var apart5 = ["Old City", 0, 1, 7, 01, 2013, 1425];
var apart6 = ["University City", 1, 1, 3, 01, 2013, 1275];
var apart7 = ["Rittenhouse Square", 3, 2.5, 4, 01, 2013, 8275];
var apart8 = ["Rittenhouse Square", 1, 1, 6, 01, 2013, 1480];
var apart9 = ["Washington Square", 2, 1, 10, 01, 2013, 1900];
var apart10 = ["Old City", 1, 1, 8, 01, 2013, 1300];
var apart11 = ["University City", 2, 2, 3, 01, 2013, 2000];
var apart12 = ["Washington Square", 1, 1, 5, 01, 2013, 1500];

// store apartment array into larger array
var allAparts = [apart1, apart2, apart3, 
	apart4, apart5, apart6, 
	apart7, apart8, apart9, 
	apart10, apart11, apart12];

//load apartment information into divs in HTML index page
var load_apartments = function () {

	//apart1
	$("neigh1").innerHTML = apart1[0];
	$("bed1").innerHTML = apart1[1];
	$("bath1").innerHTML = apart1[2];
	$("avail1").innerHTML = (apart1[3] + 1) + "/" +
		apart1[4] + "/" + apart1[5];
	$("rent1").innerHTML = "$" + apart1[6];
	
	//apart2
	$("neigh2").innerHTML = apart2[0];
	$("bed2").innerHTML = apart2[1];
	$("bath2").innerHTML = apart2[2];
	$("avail2").innerHTML = (apart2[3] + 1) + "/" +
		apart2[4]+ "/" + apart2[5];
	$("rent2").innerHTML = "$" + apart2[6];

	//apart3
	$("neigh3").innerHTML = apart3[0];
	$("bed3").innerHTML = apart3[1];
	$("bath3").innerHTML = apart3[2];
	$("avail3").innerHTML = (apart3[3] + 1) + "/" +
		apart3[4] + "/" + apart3[5]
	$("rent3").innerHTML = "$" + apart3[6];
	
	//apart4
	$("neigh4").innerHTML = apart4[0];
	$("bed4").innerHTML = apart4[1];
	$("bath4").innerHTML = apart4[2];
	$("avail4").innerHTML = (apart4[3] + 1) + "/" +
		apart4[4] + "/" + apart4[5]
	$("rent4").innerHTML = "$" + apart4[6];
	
	//apart5
	$("neigh5").innerHTML = apart5[0];
	$("bed5").innerHTML = apart5[1];
	$("bath5").innerHTML = apart5[2];
	$("avail5").innerHTML = (apart5[3] + 1) + "/" +
		apart5[4] + "/" + apart5[5]
	$("rent5").innerHTML = "$" + apart5[6];
	
	//apart6
	$("neigh6").innerHTML = apart6[0];
	$("bed6").innerHTML = apart6[1];
	$("bath6").innerHTML = apart6[2];
	$("avail6").innerHTML = (apart6[3] + 1) + "/" +
		apart6[4] + "/" + apart6[5]
	$("rent6").innerHTML = "$" + apart6[6];
	
	//apart7
	$("neigh7").innerHTML = apart7[0];
	$("bed7").innerHTML = apart7[1];
	$("bath7").innerHTML = apart7[2];
	$("avail7").innerHTML = (apart7[3] + 1) + "/" +
		apart7[4] + "/" + apart7[5]
	$("rent7").innerHTML = "$" + apart7[6];
	
	//apart8
	$("neigh8").innerHTML = apart8[0];
	$("bed8").innerHTML = apart8[1];
	$("bath8").innerHTML = apart8[2];
	$("avail8").innerHTML = (apart8[3] + 1) + "/" +
		apart8[4] + "/" + apart8[5]
	$("rent8").innerHTML = "$" + apart8[6]
	
	//apart9
	$("neigh9").innerHTML = apart9[0];
	$("bed9").innerHTML = apart9[1];
	$("bath9").innerHTML = apart9[2];
	$("avail9").innerHTML = (apart9[3] + 1) + "/" +
		apart9[4] + "/" + apart9[5]
	$("rent9").innerHTML = "$" + apart9[6]
	
	//apart10
	$("neigh10").innerHTML = apart10[0];
	$("bed10").innerHTML = apart10[1];
	$("bath10").innerHTML = apart10[2];
	$("avail10").innerHTML = (apart10[3] + 1) + "/" +
		apart10[4] + "/" + apart10[5]
	$("rent10").innerHTML = "$" + apart10[6]
	
	//apart11
	$("neigh11").innerHTML = apart11[0];
	$("bed11").innerHTML = apart11[1];
	$("bath11").innerHTML = apart11[2];
	$("avail11").innerHTML = (apart11[3] + 1) + "/" +
		apart11[4] + "/" + apart11[5]
	$("rent11").innerHTML = "$" + apart11[6]
	
	//apart12
	$("neigh12").innerHTML = apart12[0];
	$("bed12").innerHTML = apart12[1];
	$("bath12").innerHTML = apart12[2];
	$("avail12").innerHTML = (apart12[3] + 1) + "/" +
		apart12[4] + "/" + apart12[5]
	$("rent12").innerHTML = "$" + apart12[6]
		
}

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
	

	//Alert to check values user input. For testing!
	//alert("Neigh: " + neigh + "\n" +
	//"Beds: " + beds + " Baths: " + baths +
	//"\n" + "Min: " + minRent + 
	//"\n" + "Max: " + maxRent +
	//"\n" + "Month: " + moveMonth +
	//"\n" + "Day: " + moveDay +
	//"\n" + "Year: " + moveYear);
	
	search_aparts();

}

var search_aparts = function () {
	
	//unhide all apartments to rehide
	reset_aparts()
	
	for (var i = 0; i < allAparts.length; i++) {
	
		//var to store idv apartment arrays in
		var apartment = allAparts[i];
		
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
		if ( !((apartment[6] >= minRent) && (apartment[6] <= maxRent)) ){
			$(divId).style.display = "none";
		}
		
		//check month
		if(moveYear == curYear) {
			if( apartment[3] > moveMonth) {
				$(divId).style.display = "none";
			}			
		}
		
		//check day
		if(apartment[3] == moveMonth){
			if( apartment[4] > moveDay) {
				$(divId).style.display = "none";
			}
		}

		
		//check year
		if( apartment[5] > moveYear) {
			$(divId).style.display = "none";
		}
		
		
	}
	
	//display 'sorry' image if no results
	if ($("apart1").style.display == "none" &&
		$("apart2").style.display == "none" &&
		$("apart3").style.display == "none" &&
		$("apart4").style.display == "none" &&
		$("apart5").style.display == "none" &&
		$("apart6").style.display == "none" &&
		$("apart7").style.display == "none" &&
		$("apart8").style.display == "none" &&
		$("apart9").style.display == "none" &&
		$("apart10").style.display == "none" &&
		$("apart11").style.display == "none" &&
		$("apart12").style.display == "none") {
			$("noResults").style.display = "block"; 
		}
}

var reset_aparts = function () {

	for (var i = 0; i < allAparts.length; i++) {
		var divId = "apart" + (i + 1).toString();				
		$(divId).style.display = "inline-block";
		$("noResults").style.display = "none"		
	}

}



window.onload = function () {

	load_apartments();
	$("submit").onclick = get_variables;
	$("reset").onclick = reset_aparts;

} 
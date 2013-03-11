var $ = function (id) { 
	return document.getElementById(id); 
}

var neigh, beds, baths, minRent, maxRent, moveIn, 
moveMonth, moveDay, moveYear;

// 0 = neigh, 1 = bed, 2 = bath, 3 = month, 4 = day, 5 = year, 6 = rent;
var apart1 = ["Rittenhouse Square", 0, 1, 3, 01, 2013, 1250];
var apart2 = ["University City", 1, 1, 5, 1, 2013, 1520];
var apart3 = ["Washington Square", 2, 2.5, 6, 01, 2013, 3700];
var apart4 = ["Old City", 2, 2, 6, 01, 2013, 3400];
var apart5 = ["Old City", 0, 1, 7, 01, 2013, 1425];
var apart6 = ["University City", 1, 1, 3, 01, 2013, 1275];

var allAparts = [apart1, apart2, apart3];

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
	
		
}

var get_variables = function () {

	//grab neighboor hood value
	neigh = $("neighborhoods").value;
	
	if(neigh == "Select One") {
		alert("Please select a neighborhood.")
		return;
	}

	if ($("bedroom0").checked) {
		beds = $("bedroom0").value;
	} else if ($("bedroom1").checked) {
		beds = $("bedroom1").value;
	} else if ($("bedroom2").checked) {
		beds = $("bedroom2").value;
	} else if ($("bedroom3").checked) {
		beds = $("bedroom3").value;
	} else if ($("bedroom4").checked) {
		beds = $("bedroom4").value;
	} else if ($("bedroom5").checked) {
		beds = $("bedroom5").value;
	} 

	if ($("bathroom0").checked) {
		baths = $("bathroom0").value;
	} else if ($("bathroom1").checked) {
		baths = $("bathroom1").value;
	} else if ($("bathroom2").checked) {
		baths = $("bathroom2").value;
	} else if ($("bathroom3").checked) {
		baths = $("bathroom3").value;
	} else if ($("bathroom4").checked) {
		baths = $("bathroom4").value;
	} else if ($("bathroom5").checked) {
		baths = $("bathroom5").value;
	} 

	minRent = $("min").value;
	if(minRent == "") {
		alert("Please enter a minimum rent rate.");
		return;	
	}

	maxRent = $("max").value;
	if(maxRent == "") {
		alert("Please enter a maximum rent rate.");
		return;	
	}

	moveIn = $("moveInDate").value;
	if(moveIn == "") {
		alert("Please enter a move in date (MM/DD/YYYY).");
		return;	
	}
	

	moveMonth = moveIn.substring(0, 2) - 1;
	moveDay = moveIn.substring(3, 5);
	moveYear = moveIn.substring(6, 10);

	alert("Neigh: " + neigh + "\n" +
	"Beds: " + beds + " Baths: " + baths +
	"\n" + "Min: " + minRent + 
	"\n" + "Max: " + maxRent +
	"\n" + "Month: " + moveMonth +
	"\n" + "Day: " + moveDay +
	"\n" + "Year: " + moveYear);
	
	search_aparts();

}

var search_aparts = function () {
	
	//alert("apart: " + allAparts.length);
	
	reset_aparts();
	
	for (var i = 0; i < allAparts.length; i++) {
	
		var apartment = allAparts[i];
		//alert("apartment: " + apartment);
		

		var divId = "apart" + (i + 1).toString();
		//alert("divId: " + divId);
		
		//0 = neigh, 1 = bed, 2 = bath, 3 = month, 4 = day, 5 = year, 6 = rent;
		
		//check neighborhoods
		if (neigh != apartment[0]){
			$(divId).style.display = "none";
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
		if( apartment[3] > moveMonth) {
			$(divId).style.display = "none";
		}
		
		//check day
		if( apartment[4] > moveDay) {
			$(divId).style.display = "none";
		}
		
		//check year
		if( apartment[5] > moveYear) {
			$(divId).style.display = "none";
		}
		
		
	}
}

var reset_aparts = function () {

	for (var i = 0; i < allAparts.length; i++) {
		var divId = "apart" + (i + 1).toString();				
		$(divId).style.display = "inline-block";		
	}

}



window.onload = function () {

	load_apartments();
	$("submit").onclick = get_variables;
	$("reset").onclick = reset_aparts;
	//alert(apart1.neighborhood + "\n" + 1
	//apart1.bedrooms + "\n" + apart1.bathrooms + "\n" +
	//apart1.month + "\n" + apart1.day + "\n" + apart1.year);
} 
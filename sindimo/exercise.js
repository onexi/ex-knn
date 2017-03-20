//
var exercise = {};

// kNN parameters
roomsMin = 1;
roomsMax = 10;
areaMin = 250;
areaMax = 1700;
roomsRange = roomsMax-roomsMin;
areaRange  = areaMax-areaMin;

exercise.measureDistances = function(rooms,area){
	// ------------------------
	// YOUR CODE
	// ------------------------

    var size = data.length;

    for (var i=0; i<size; i++){

        var deltaRooms = data[i].rooms - rooms;
        deltaRooms = deltaRooms/roomsRange;

        var deltaArea = data[i].area - area;
        deltaArea = deltaArea/areaRange;

        data[i].distance = Math.sqrt(deltaRooms*deltaRooms + deltaArea*deltaArea);

    }

};



exercise.sortByDistance = function () {
	// ------------------------
	// YOUR CODE
	// ------------------------

    data.sort(mySort);

    function mySort (a, b) {

        return a.distance - b.distance;
    }

};



exercise.guessType = function(k){
	// ------------------------
	// YOUR CODE
	// ------------------------

	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/

    //Initalize guess object
    var guess = {type : '', count : 0};

    //Initalize voting counters
	var votes = {flat: 0, house : 0, apartment: 0};

    //Get k closest points, data is already sorted from small to large
	var closest = data.slice(0,k);

    //Cast the votes
	for(var i=0; i<k; i++){

		if(closest[i].type === 'flat'){
            votes.flat += 1;
        } 
		if(closest[i].type === 'house') {
            votes.house += 1;
        }		    
		if(closest[i].type === 'apartment'){
            votes.apartment += 1;
        } 	

	}


	//Find the higest vote in counting dictionary
	for (var vote in votes) {

	    if (votes[vote] > guess.count) {

	    	guess.type  = vote;
	    	guess.count = votes[vote];

	    }

	}

 
	return guess;

};

// share work
module.exports = exercise;
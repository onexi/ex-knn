//
var exercise = {};

// kNN parameters
var roomsMin = 1;
var roomsMax = 10;
var areaMin = 250;
var areaMax = 1700;
var roomsRange = roomsMax-roomsMin;
var areaRange  = areaMax-areaMin;

exercise.measureDistances = function(rooms,area){
	
    data.forEach(function(residents){
        var deltaRooms = residents.rooms - rooms;
        deltaRooms = deltaRooms / roomsRange;

        var deltaArea = residents.area - area;
        deltaArea = deltaArea / areaRange;

        residents.distance = Math.sqrt(deltaRooms*deltaRooms + deltaArea*deltaArea);
    });

};

exercise.sortByDistance = function () {
	
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
};

exercise.guessType = function(k){
	// ------------------------
	// YOUR CODE
	// ------------------------
    // find some number closest, count the type, return the type with the largest count

    var types = {apartment : 0, flat : 0, house : 0};

    var nn = data.slice(0,k);

    for (var i = 0; i < k; i++) {
        var nnType = nn[i].type;
        // === checks type and value (not just value)
        if (nnType === 'apartment') types.apartment +=1;
        if (nnType === 'flat') types.flat +=1;
        if (nnType === 'house') types.house +=1;
    }

    var guess = {type: false, count : 0};

    for (var type in types) {
        if (types[type] > guess.count) {
            guess.type = type;
            guess.count = types[type];
        }
    }

    return guess;


	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/
};

// share work
module.exports = exercise;
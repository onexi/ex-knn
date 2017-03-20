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
	data.forEach(function(residence){
		var deltaRooms = residence.rooms - rooms;
		deltaRooms = deltaRooms / roomsRange; 
	});

	var deltaArea = residence.area - area;
	deltaArea = deltaArea / areaRange;

	residence.distance = Math.sqrt(deltaRooms * deltaRooms + deltaArea * deltaArea)
	};
	// ------------------------
	// YOUR CODE
	// ------------------------
	

exercise.sortByDistance = function () {
	data.sort(function(a,b){
		return a.distance - b.distance;
	});
	// ------------------------
	// YOUR CODE
	// ------------------------
};

exercise.guessType = function(k){

	var types = {apartment: 0, flat: 0, house: 0};
	var nn = data.slice(0,k);

	for (var i=0; i<k; i++){
		var nnType = nn[i].type;
		if (nnType === 'apartment') types.apartment += 1;
		if (nnType === 'flat') types.flat += 1;
		if (nnType === 'house') types.house += 1;

		var guess = {type: false, count:0};
		for (var type in types){
			if (types[type] > guess.count){
				guess.type = type;
				guess.count = types[type];
			}
		}
		return guess;
	// ------------------------
	// YOUR CODE
	// ------------------------

	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/
};

// share work
module.exports = exercise;
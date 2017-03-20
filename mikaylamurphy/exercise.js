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
	data.forEach(function(residence){
		var dist_rooms = residence.rooms - rooms;
		dist_rooms = dist_rooms / roomsRange;

		var dist_area = residence.area - area;
		dist_area = dist_area / areaRange;

		residence.distance = Math.sqrt(Math.pow(dist_rooms, 2) + Math.pow(dist_area, 2))
	})
};

exercise.sortByDistance = function () {
	// ------------------------
	// YOUR CODE
	// ------------------------
	data.sort(function(a,b){
		return a.distance - b.distance
	});
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
	var types = {'apartment': 0, 'flat': 0, 'house': 0};
	var nn = data.slice(0,k)
	nn.forEach(function(item){
		types[item.type] += 1})

	var guess = {type: null, count: 0};
	for (var type in types){
		if (types[type] > guess.count){
			guess.type = type;
			guess.count = types[type];
		}
	}
	return guess;
};

// share work
module.exports = exercise;
//
var exercise = {};

// kNN parameters
roomsMin = 1;
roomsMax = 10;
areaMin = 250;
areaMax = 1700;
roomsRange = roomsMax - roomsMin;
areaRange = areaMax - areaMin;

exercise.measureDistances = function (rooms, area) {
    data.forEach((residence, i) => {
        var deltaRooms = residence.rooms - rooms;
        deltaRooms = deltaRooms / roomsRange;
        
        var deltaArea = residence.area - area;
        deltaArea = deltaArea / areaRange;

        residence.distance = Math.sqrt(deltaRooms * deltaRooms + deltaArea * deltaArea);
    });
};

exercise.sortByDistance = function () {
    data.sort( (a,b) => {
        return a.distance - b.distance;
    });

};

exercise.guessType = function (k) {
    // ------------------------
    // YOUR CODE
    // ------------------------

	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/
    var closest ={};
    //var nn = data.slice(0,k)


    for (var i = 0 ; i < k ; i++){
        if (closest[data[i].type]) closest[data[i].type]++;
        else closest[data[i].type] = 1;
    }
    

    var guess = {type: false, count: 0};
    for (var type in closest){
        if (closest[type] > guess.count){
            guess.type = type;
            guess.count = closest[type];
        }
    }
    console.log(guess);

/////
    return guess;

};

// share work
module.exports = exercise;
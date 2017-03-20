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
        var deltaArea = residence.area - area;
        deltaArea = deltaArea / areaRange;
        residence.distance = Math.sqrt(deltaRooms*deltaRooms + deltaArea*deltaArea);
    });
};

exercise.sortByDistance = function () {
    data.sort(function(a, b){
        return a.distance - b.distance;
    });
};

exercise.guessType = function(k){
	/*
		// data format you need to return
		var guess = {type : "house", count : 2};
		return guess;
	*/

    var types = {apartment: 0, flat: 0, house: 0};
    var nn = data.slice(0, k);
    for(var i=0; i<k; i++){
        var nnType = nn[i].type;
        if(nnType === 'apartment') types.apartment += 1;
        if(nnType === 'flat') types.flat += 1;
        if(nnType === 'house') types.house += 1;
    }

    /* alternate method using reduce to get counts:
    var nearest = data.slice(0, k);
    var nearestTypes = nearest.map(function(item){ return item.type; });
    var types = nearestTypes.reduce(function(previous, current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    }, {});
    */

    var guess = {type: false, count: 0};
    for(var j in types){
        if(types[j] > guess.count){
            guess.type = j;
            guess.count = types[j];
        }
    }
    return guess;
};

// share work
module.exports = exercise;
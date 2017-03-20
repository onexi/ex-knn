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
    data.forEach(function(residence){
        var deltaRooms = residence.rooms - rooms;
        deltaRooms = deltaRooms / roomsRange;
    
        var deltaArea = residence.area - area;
        deltaArea = deltaArea / areaRange;

        residence.distance = Math.sqrt(deltaRooms*deltaRooms + deltaArea*deltaArea);
    });
};

exercise.sortByDistance = function(){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data;
};

exercise.guessType = function(k){
    var types = {apartment: 0, flat: 0, house: 0};

    var nn = data.slice(0,k);

    for (var i =0; i<k; i++){
        var nnType = nn[i].type;

        if (nnType === 'apartment') types.apartment +=1;
        if (nnType === 'flat') types.flat += 1;
        if (nnType === 'house') types.house += 1;
    }
    var guess = {type: false, count: 0};

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
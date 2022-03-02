const sumAll = function(start, end) {
let total = 0;
let beginHere = null;
let endHere = null;

if ((typeof(start) != 'number') || (typeof(end) != 'number')) {
    return 'ERROR';
}

if (start < 0 || end < 0){
    return 'ERROR';
}

if (start > end){
    beginHere = end;
    endHere = start;
} else {
    beginHere = start;
    endHere = end;
}




for (beginHere; beginHere < endHere + 1; beginHere++){
    total += beginHere;
}
return total;
};

// Do not edit below this line
module.exports = sumAll;

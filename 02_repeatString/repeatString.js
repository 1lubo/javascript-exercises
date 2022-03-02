const repeatString = function(stringToRepeat, repeatTimes ) {
    let newString = '';
    if (repeatTimes < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < repeatTimes; i++) {
            newString += stringToRepeat;
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;

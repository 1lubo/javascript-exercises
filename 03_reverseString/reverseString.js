const reverseString = function(stringToReverse) {
    let splitString = stringToReverse.split('');
    
    revSplitString = splitString.reverse();
    
    const newString = splitString.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

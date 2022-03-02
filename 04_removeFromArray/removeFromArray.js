const removeFromArray = function(...args) {
    const allArgs = Array.from(args);
    const array = allArgs[0];
    const toRemove = allArgs.slice(1);
    const newArray = [];

    for (let i = 0; i < array.length; i++){
        let curElement = array[i];
        let indexOfElement = toRemove.indexOf(curElement);
        if (indexOfElement < 0) {
            newArray.push(curElement);
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


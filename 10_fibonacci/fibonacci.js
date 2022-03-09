const fibonacci = function(a) {
    
    if (typeof a === "string") {
        a = parseInt(a);
    }

    if (a <= 0) {
        return "OOPS";
    } 
    if (a>0 && a<3) {
        return 1;
    }
    let previous = 0;
    let current = 1;
    let next = null;

    for (let i = 1; i < a; i++ ) {
        next = previous + current;
        previous = current;
        current = next;
    }

    return next;
     

};

// Do not edit below this line
module.exports = fibonacci;

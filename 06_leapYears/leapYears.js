const leapYears = function(year) {
    
   if (!isCenturyYear(year) && year % 4 === 0) {
       return true;
   } else if (isCenturyYear(year) && year % 400 === 0) {
       return true;
   } else {
       return false;
   }
    };


const isCenturyYear = year => year % 100 === 0;

// Do not edit below this line
module.exports = leapYears;

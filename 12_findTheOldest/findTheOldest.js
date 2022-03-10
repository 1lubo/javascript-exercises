let date =  new Date().getFullYear();

const findTheOldest = function(pips) {
    let sorted = pips.sort(function(a,b) {
      if (!('yearOfDeath' in a)){
        a['yearOfDeath'] = date;
        
      };
      if (!('yearOfDeath' in b)) {
        b['yearOfDeath'] = date;
        
      }
      return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;      
    });

    return sorted[0];
  } 
    





  
// Do not edit below this line
module.exports = findTheOldest;

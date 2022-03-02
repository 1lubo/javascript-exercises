const ftoc = function(ftemp) {
  const tempInCel = ((ftemp - 32) * 5) / 9;
  
  return Math.round(tempInCel * 10) / 10;
};

const ctof = function(ctemp) {
  const tempInFah = ((ctemp * 9) / 5) + 32;

  return Math.round(tempInFah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

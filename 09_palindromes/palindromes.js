const palindromes = function (string) {

    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';

    let rawLetters = string.toLowerCase().split('');
    
    let cleanLetters = rawLetters.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
    })
    //console.log(cleanLetters.join(''));
    //console.log(cleanLetters.reverse().join(''));
    let j = -1;
    for (let i = 0; i <= Math.floor(cleanLetters.length / 2); i++) {
        
        
        if (cleanLetters[i] != cleanLetters.at(j-i)) {
            //console.log(`i = ${i} ${cleanLetters[i]} does not equal ${cleanLetters.at(j-i)} j = ${j-i}`);
            return false; 
        } 
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;

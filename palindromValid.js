var isPalindrome = function(s) {
    if (typeof s !== "string") return false;
    if (s === '') return true;
    let reverseString = s
                                    .replace(/[^a-zA-Z0-9]+/g, '')
                                    .split('')
                                    .filter(elem => elem.trim() != '')
                                    .reverse()
                                    .join('')
                                    .toLowerCase();
    let standartString = s
                                    .replace(/[^a-zA-Z0-9]+/g, '')
                                    .split(' ')
                                    .join('')
                                    .toLowerCase();
    return reverseString === standartString;
};



console.log(isPalindrome("Egad! Loretta has Adams as mad as a hatter. Old age!"))
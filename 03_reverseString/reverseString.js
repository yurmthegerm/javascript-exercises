const reverseString = function(string) {
    return string.split('').reverse().join('');
    /*
    let result = '';
    if (string === '') {
        return '';
    }else {
        for (i = string.length-1; i <= 0; i --) {
            result += string.charAt(i);
        }
    }
    return result;
    */
};

// Do not edit below this line
module.exports = reverseString;

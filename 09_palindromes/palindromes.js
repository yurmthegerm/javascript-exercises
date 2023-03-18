const palindromes = function (str) {
    const thing = str.toLowerCase().replace(/[^a-z]/g, "");
    return thing == thing.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

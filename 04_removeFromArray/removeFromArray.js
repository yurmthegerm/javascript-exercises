const removeFromArray = function(lst, ...rest) {
    let result = lst;
    for (const arg of lst) {
        for (const elem of rest) {
            if (arg === elem) {
                result.splice(result.indexOf(arg),1);
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

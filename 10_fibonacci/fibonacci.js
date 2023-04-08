const fibonacci = function(num) {
    const order = parseInt(num);
    if (order < 0) {
        return 'OOPS';
    } else if (order === 0) {
        return 0;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 1; i < order; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;

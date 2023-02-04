const sumAll = function(no, nt) {
    let array = [];
    let sum = 0;
    if (Number.isInteger(no) && Number.isInteger(nt) && no > 0 && nt > 0) {
        if (no < nt){
            array = [no,nt];
        } else {
            array = [nt,no];
        }
        let num = array[0];
        do {
            sum += num;
            num ++;
        } while (num <= array[1]);
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;

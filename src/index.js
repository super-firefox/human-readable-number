const dictNumber = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
}

module.exports = function toReadable(number) {
    let strNumber = String(number);
    let pos = strNumber.length - 1;
    let digit;
    let prevDigit;
    result = "";
    while (pos >= 0) {
        digit = strNumber.charAt(pos);
        prevDigit = strNumber.charAt(pos-1) || "0";
        if (isPrevDigit(pos)) {
            if (isCompoundNumber(prevDigit, digit)) {
                    result = `${dictNumber[prevDigit + "0"]} ${dictNumber[digit]} ${result}`;
            } else {
                if(prevDigit == 0 && digit != 0){
                    result = `${dictNumber[digit]} ${result}`;
                } else if(prevDigit != 0 && digit == 0) {
                    result = `${dictNumber[prevDigit + "0"]} ${result}`;
                } else if (prevDigit != 0 && digit != 0) {
                    result = `${dictNumber[prevDigit + digit]} ${result}`;
                }
            }

            pos -= 2;
            if (pos > -1) {
                result = `${dictNumber[100]} ${result}`;
            }
        } else {
            result = `${dictNumber[digit]} ${result}`;
            pos -= 1;
        }
    }
    return result.trim();
}

function isPrevDigit(pos) {
    if (pos - 1 < 0) {
        return false
    } else {
        return true;
    }
}

function isCompoundNumber(first, second) {
    if(first>=2 && second !=0) {
        return true;
    }
    return false;
}


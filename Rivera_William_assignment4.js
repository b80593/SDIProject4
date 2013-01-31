//alert("JavaScript works!");

/*  William Rivera
    SDI 1301
    Project 4
    Function Library
*/



// My String
// Email Pattern
    var patEcheck = function (myEmail) {
        var email = myEmail,
        patAt = 0,
        patDot = 0;
        
    patAt   = email.indexOf("@");
    patDot  = email.indexOf(".");
    
    if (patAt != -1 && patDot != -1) { //Make up: Boolean Operation Project 2
        if (patAt < patDot) {
            if (patDot - patAt != 1) {
                return (email + " is a valid email."); // Make up: Returns in code Project 2
                }
                else {
                    return (email + " is not a valid email.");
                }
        } else {
            return (email + " is not a valid email.");
        }
    } else {
        return (email + " is not a valid email.");
    }
                
}
// URL Starts
var urlStart = function (string) {
    var url = string,
        check = "",
        startArray = [],
        end = url.indexOf(":");
    
    startArray[0] = "http:";
    startArray[1] = "https:";
    
    check = url.substring(0, end + 1);
    
    if (check === startArray[0]) {
        return (url + " is a valid URL.");
    }
    else if (check === startArray[1]) {
        return (url + " is a valid URL.");
    }
    else {
        return (url + " is not a valid URL.");
    }
}

// Title-case String
var stringUpper = function (string) {
    var split = string.split(" ");
    var result = "";
    for (var w = 0, r = split.length; w < r; w++) {
        var spNew =
        split[w].replace(split[w].charAt(0),(split[w].charAt(0)).toUpperCase());
            result = result.concat(spNew + " ");
    };
    return result;
}

// String Separator
var stringSep = function (firstChange) {
    if (firstChange) {
        return;
    }
}
/*
// Phone Pattern
var phoneNumber = function (phonePatt) {
    var checkPhone = phonePatt;
    var number = 
}

*/
// Number Functions
// Decimal Place Format
var decimalPlace = function (number) {
    var newNumber;
    newNumber = number.toFixed(2);
    
    return (number + " is now the " + newNumber);
}

// Fuzzy-match a number
var fuzzyMatch = function (num,compareNum,percent) {
    var percentage = (num/compareNum) * 100;
    if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
        return false;
    } else {
        return true;
    }
}

// Days difference between two dates
var diffBtDates = function (dateW,dateR) {
    var results = [];
    var difference = (dateW > dateR) ? dateW.getTime() -dateR.getTime() : dateR.getTime() - dateW.getTime();
    results[3] = difference / 1000;
    results[2] = results[3] / 60;
    results[1] = results[2] / 60;
    results[0] = results[1] / 24;
    return results;
}
// Return Values
console.log(patEcheck("wjrivera247@fullsail.edu"));
console.log(patEcheck("wjrivera247fullsail.edu"));
console.log(urlStart("http://www.apple.com/"));
console.log(urlStart("apple.com"));
console.log(stringUpper("ethan matthew rivera"));
console.log(stringSep("a/b/c"));
console.log(decimalPlace(2.1));
console.log(decimalPlace(3.14592));
console.log(decimalPlace(120));
console.log(fuzzyMatch(10,5,60));
console.log(fuzzyMatch(5,10,50));
var dateW = new Date(2013,8,14);
var dateR = new Date(2013,5,13);
var timeDifference = diffBtDates(dateW,dateR);
console.log("Diference between the two dates is: " + timeDifference[0] + " dates and "+ "in hours is: " + timeDifference[1] + " hours");
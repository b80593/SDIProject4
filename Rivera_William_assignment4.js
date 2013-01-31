//alert("JavaScript works!");

/*  William Rivera
    SDI 1301
    Project 4
    Function Library
*/


// My String
var patEcheck = function (myEmail) {
    var email = myEmail,
        patAt = 0,
        patDot = 0;
        
    patAt   = email.indexOf("@");
    patDot  = email.indexOf(".");
    
    if (patAt != -1 && patDot != -1) {
        if (patAt < patDot) {
            if (patDot - patAt != 1) {
                return (email + " is a valid email.");
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


//Return Values
console.log(patEcheck("wjrivera247@fullsail.edu"));
console.log(patEcheck("wjrivera247fullsail.edu"));
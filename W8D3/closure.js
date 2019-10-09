// 1. Basic Closure
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    
    // this inner function (closure) has access to the outer function's variables, including the parameter
    function makeFullName () {   
        return nameIntro + fistName + " " + lastName;  
    }
    return makeFullName ();
}

showName ("Michael", "Jackson"); // Your name is Michael Jackson

/****************************************************************************************************************** */

// 2. Closures have access to the outer function’s variable even after the outer function returns:
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    
    // this inner function has access to the outer function's variables, including the parameter
    function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
mjName ("Jackson"); // This celebrity is Michael Jackson

/****************************************************************************************************************** */
// 3. Closures store references to the outer function’s variables; they do not store the actual value.
function celebrityID() {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function () {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
            return celebrityID;
        },
        setID: function (theNewID) {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }

}

var mjID = celebrityID(); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable 

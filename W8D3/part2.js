function titleize(names, printCallback) {
    titleizeNames = Array.prototype.map(function(name) {
        return (`Mx. ${name} Jingleheimer Schmidt`);
    });
    
    function printCallback() {
        for (let i=0; i < titleizeNames.length; i++) {
            console.log(titleizeNames[i]);
        }
    }
}

titleize(["Mary", "Brian", "Leo"], printCallback);
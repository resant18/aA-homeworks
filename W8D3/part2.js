// Phase I: Callback
// function to titleize
function titleize(names, printCallback) {
    titleizeNames = names.map(function (name) {
        return (`Mx. ${name} Jingleheimer Schmidt`);
    });
    printCallback(titleizeNames)
}

// function to print
function printCallback(titleizeNames) {    
    for (let i = 0; i < titleizeNames.length; i++) {
        console.log(titleizeNames[i]);
    }
}

titleize(["Mary", "Brian", "Leo"], printCallback);


// Phase II: Constructor
function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
}

Elephant.prototype.grow = function() {
    return this.height + 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick)
    //return this.tricks; do not need this return 
}

Elephant.prototype.play = function() {
    console.log(`${this.name} is ${this.tricks}`);
    randomTrickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} loves ${this.tricks[randomTrickIndex]} the most!`);
}

dumbo = new Elephant("Dumbo", 10, ["flying"]);
dumbo.trumpet();
console.log(dumbo.grow());
console.log(dumbo.addTrick("stomping"));
dumbo.play();

// Phase III: Function Invocation
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`);    
}


Elephant.paradeHelper(micah);

herd.forEach(Elephant.paradeHelper);

// Phase IV: Closures
function dinerBreakfast() {
    let order = ["cheesy scrambled eggs"];
    
    return function(newOrder) {
        order.push(newOrder)
        console.log(`I'd like ${order.join(' and ')}please`);
    }
    
}

let bfastOrder = dinerBreakfast();
bfastOrder();
bfastOrder("chocolate chip pancakes");

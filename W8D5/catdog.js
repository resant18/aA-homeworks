function Cat() {
    this.name = 'Markov';
    this.age = 3;
}

function Dog() {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const markov = new Cat();
const noodles = new Dog();

// Method style: `this` refer to noodles
console.log("Method Style ---------------");
noodles.chase(markov);

// call binding
// this set to the first arg, which is markov
console.log("Call Binding ---------------");
noodles.chase.call(markov, noodles);

// apply binding
console.log("Apply Binding ---------------");
noodles.chase.apply(noodles, [markov]);

// bind binding
console.log("Bind Binding ---------------");
let whoChase = noodles.chase.bind(markov, noodles);
whoChase();
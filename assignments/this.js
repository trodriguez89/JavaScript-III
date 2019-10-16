/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - if none of the other rules apply, the "this" keyword defaults to the window object.
* 2. Implicit Binding - is the most common rule found in about 80% of use cases. When the function is invoked, look to the left of the "." and that's what "this" keyword is referring to.
* 3. Explicit Binding - refers to .call .apply .bind - allows us to explicitly state what the "this" keyword is in any given function.
* 4. New Binding - using the "new" keyword constructs a new object and "this" keyword points to it.
*
* write out a code example of each explanation above
*/

// Principle 1
function animal() {
    console.log(this.sound);
}

var sound = "GRRRRRREAT";
animal();
// code example for Window Binding

// Principle 2
const myFavAnimal = {
    species: "Tiger",
    name: "Tony",
    sound: "GRRRRRRREAT",
    noise: function(){
        console.log(this.sound);
    }
}

myFavAnimal.noise();
// code example for Implicit Binding

// Principle 3
function FavoriteAnimal(animalAtt){
    this.species = animalAtt.species,
    this.name = animalAtt.name,
    this.sound = animalAtt.sound
}
FavoriteAnimal.prototype.growl = function(){
    return `My name is ${this.name} the ${this.species} and my favorite cereal is Frosted Flakes because they taste ${this.sound}`
} // did this for fun and to practice

const tiger = new FavoriteAnimal({
    species: "Tiger",
    name: "Tony",
    sound: "GRRRRRRRREAT!!"

})

console.log(tiger.growl());
// code example for New Binding

// Principle 4
function animal(){
    console.log(this.sound)
}

const myFirstFavAnimal = {
    type: "Cat",
    sound: "MEOOOOOW"
}

const mySecondFavAnimal = {
    type: "Dog",
    sound: "BARK!!!"
}


animal.call(myFirstFavAnimal);
animal.call(mySecondFavAnimal);

// code example for Explicit Binding
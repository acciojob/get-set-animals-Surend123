//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	function makeSound(){
		console.log("a sound the animal makes");
	}
}

class Dog extends Animal {
	function purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	function bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

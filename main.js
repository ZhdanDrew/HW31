
const person1 = {
  name: "Olga",
  age: 40,

  work: function (job) {
    console.log(`My name is ${this.name}. I am working as ${job}`);
  }
};

const person2 = {
  name: "Max",
  age: 18,
};


const workMethodForPerson2 = person1.work.bind(person2);
workMethodForPerson2("developer"); 

person2.birthday = function () {
  this.age += 1;
};

person2.birthday();
console.log(person2.age); 

person1.birthday = function () {
  this.age += 1;
};

person1.birthday.apply(person2);
console.log(person2.age); 

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person3 = new Person("John", 25);

console.log(person3); 

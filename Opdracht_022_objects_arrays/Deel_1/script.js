let person = {
    name: 'Rob',
    age: 49
};

// Dot Notation
person.name = 'Robby';
person.age = 50;

// Bracket Notation
person['name'] = 'Rob Hermens';
person['age'] = 49;
person['evaluations'] = ['7', '10', '9'];

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.evaluations);
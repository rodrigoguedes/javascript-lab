var squareVersion1 = (x) => {
  return x * x;
};
console.log(squareVersion1(9));

var squareVersion2 = (x) => x * x;
console.log(squareVersion2(9));

var squareVersion3 = x => x * x;
console.log(squareVersion3(9));

var sum = (x, y) => x + y;
console.log(sum(1, 2));

var hello = () => console.log('Hello!');
hello();

var user = {
  name: 'Rodrigo',
  sayHi: () => {
    console.log(arguments); //Not working
    console.log(`Hi. I'm ${this.name}`); //Not working
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}
user.sayHi();
user.sayHi(1, 2, 3);
user.sayHiAlt();
user.sayHiAlt(1, 2, 3);

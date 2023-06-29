const obj1 = { name: "Person 1", age: 5 };
const obj2 = { age: 5, name: "Person 1" };

const values1 = Object.values(obj1);
const values2 = Object.values(obj2);

const ans = values2.every((element) => values1.includes(element))

console.log(ans);
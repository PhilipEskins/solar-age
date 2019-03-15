export {earthAge};

export class Person {
  constructor(age) {
    this.age = age;
  }
  mercAge() {
    return Math.floor(this.age / 0.24);
  }
  venusAge() {
    return Math.floor(this.age / 0.62);
  }
  marsAge() {
    return Math.floor(this.age / 1.88);
  }
  jupAge(age) {
    return Math.floor(this.age / 11.86);
  }
}

function earthAge(dateInput) {
  const current = new Date();
  const birthday = new Date(dateInput);
  let age = current.getFullYear() - birthday.getFullYear();
  const month = current.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && current.getDate() < birthday.getDate())) {
    age--;
  }
  const test = new Person(age);
  console.log(test.mercAge());
  console.log(test.venusAge());
  console.log(test.marsAge());
  console.log(test.jupAge());
  return age;
}

console.log(earthAge("10/04/1982"));

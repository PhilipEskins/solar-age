class Person {
  constructor(age, life) {
    this.age = age;
    this.life = life;
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
  jupAge() {
    return Math.floor(this.age / 11.86);
  }
  mercLife() {
    return Math.floor(this.life / 0.24);
  }
  venusLife() {
    return Math.floor(this.life / 0.62);
  }
  marsLife() {
    return Math.floor(this.life / 1.88);
  }
  jupLife() {
    return Math.floor(this.life / 11.86);
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
  const life = liveLong(age);
  const test = new Person(age, life);
  $(".results").append("<p>" + age + " Earth years</p>");
  $(".results").append("<p>" + test.mercAge() + " Mercurian years</p>");
  $(".results").append("<p>" + test.venusAge() + " Venusian years</p>");
  $(".results").append("<p>" + test.marsAge() + " Martian years</p>");
  $(".results").append("<p>" + test.jupAge() + " Jovian years</p>");
  $(".results").append("<p>" + life + " approximate Earth years left</p>");
  $(".results").append("<p>" + test.mercLife() + " approximate Mercurian years left</p>");
  $(".results").append("<p>" + test.venusLife() + " approximate Venusian years left</p>");
  $(".results").append("<p>" + test.marsLife() + " approximate Martian years left</p>");
  $(".results").append("<p>" + test.jupLife() + " approximate Jovian years left</p>");
  // console.log(test.mercAge());
  // console.log(test.venusAge());
  // console.log(test.marsAge());
  // console.log(test.jupAge());
  // console.log(life);
  // console.log(test.mercLife());
  // console.log(test.venusLife());
  // console.log(test.marsLife());
  // console.log(test.jupLife());
  // return age;
}

function liveLong(age) {
  const lifeExpect = 78;
  const life = lifeExpect-age;
  return life;
}

// console.log(earthAge("10/04/1982"));

export {earthAge, liveLong, Person};

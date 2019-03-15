export {earthAge, mercAge, venusAge};

function earthAge(dateInput) {
  const current = new Date();
  const birthday = new Date(dateInput);
  let age = current.getFullYear() - birthday.getFullYear();
  const month = current.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && current.getDate() < birthday.getDate())) {
    age--;
  }
  console.log(mercAge(age));
  console.log(venusAge(age));
  return age;
}

function mercAge(age) {
  const mercury = age / 0.24;
  return Math.floor(mercury);
}

function venusAge(age) {
  const venus = age / 0.62;
  return Math.floor(venus);
}

console.log(earthAge("10/04/1982"));

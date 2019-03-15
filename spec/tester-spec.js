import { earthAge, Person } from './../src/solar-age.js';

describe('Solar Age', function(){
  // beforeEach(function() {
  //   const reusablePerson = new Person(36);
  // });

  it('should return your age on Earth', function() {
    expect(earthAge("10/04/1982")).toEqual(36);
  });

  it('should return your age on Mercury', function() {
    const reusablePerson = new Person(36);
    expect(reusablePerson.mercAge()).toEqual(150);
  });

  it('should return your age on Venus', function() {
    const reusablePerson = new Person(36);
    expect(reusablePerson.venusAge(36)).toEqual(58);
  });

  it('should return your age on Mars', function() {
    const reusablePerson = new Person(36);
    expect(reusablePerson.marsAge(36)).toEqual(19);
  });

  it('should return your age on Jupiter', function() {
    const reusablePerson = new Person(36);
    expect(reusablePerson.jupAge(36)).toEqual(3);
  });

  it('should return your life expectancy on Earth', function() {
    const reusablePerson = new Person(36);
    expect(reusablePerson.liveLong(36)).toEqual(42);
  });

});

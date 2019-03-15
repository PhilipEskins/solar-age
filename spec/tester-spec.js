import { earthAge, mercAge, venusAge} from './../src/solar-age.js';


describe('Solar Age', function(){

  it('should return your age on Earth', function() {
  expect(earthAge("10/04/1982")).toEqual(36);
  });

  it('should return your age on Mercury', function() {
  expect(mercAge(36)).toEqual(150);
  });

  it('should return your age on Venus', function() {
  expect(venusAge(36)).toEqual(58);
  });
  //
  // it('should return your age on Mars', function() {
  // expect(dayReturn("10", "04", "1982")).toEqual(19)
  // });
  //
  // it('should return your age on Jupiter', function() {
  // expect(dayReturn("10", "04", "1982")).toEqual(3)
  // });

});

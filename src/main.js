import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { earthAge, liveLong, Person } from './../src/solar-age.js';

$(document).ready(function() {
  $("#getBirthday").submit(function(event) {
    event.preventDefault();
    const dayOfBirth = $("#dayOfBirth").val();
    printResults(dayOfBirth);
    function printResults(dateInput) {
      const num1 = earthAge(dateInput);
      const num2 = liveLong(num1);
      const test = new Person(num1, num2);
      $(".results").append("<p>" + num1 + " Earth years</p>");
      $(".results").append("<p>" + test.mercAge() + " Mercurian years</p>");
      $(".results").append("<p>" + test.venusAge() + " Venusian years</p>");
      $(".results").append("<p>" + test.marsAge() + " Martian years</p>");
      $(".results").append("<p>" + test.jupAge() + " Jovian years</p>");
      $(".results").append("<p>" + num2 + " approximate Earth years left</p>");
      $(".results").append("<p>" + test.mercLife() + " approximate Mercurian years left</p>");
      $(".results").append("<p>" + test.venusLife() + " approximate Venusian years left</p>");
      $(".results").append("<p>" + test.marsLife() + " approximate Martian years left</p>");
      $(".results").append("<p>" + test.jupLife() + " approximate Jovian years left</p>");
    }
  });
});

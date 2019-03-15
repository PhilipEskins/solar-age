import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { printResults } from './../src/solar-age.js';

$(document).ready(function() {
  $("#getBirthday").submit(function(event) {
    event.preventDefault();
    const dayOfBirth = $("#dayOfBirth").val();
    printResults(dayOfBirth);
  })
})

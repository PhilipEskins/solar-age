import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { earthAge } from './../src/solar-age.js';

$(document).ready(function() {
  $("#getBirthday").submit(function(event) {
    event.preventDefault();
    const dayOfBirth = $("#dayOfBirth").val();
    earthAge(dayOfBirth);
  })
})

'use strict';

var Countdown = require('../../dist/countdown.min.js')

var now = new Date()
var ten_seconds = (1000*10)
var end = new Date(now.getTime() + ten_seconds)
var countdown = Countdown.timer(end, function(time) {
  document.getElementById('days').textContent = time.days
  document.getElementById('hours').textContent = time.hours
  document.getElementById('minutes').textContent = time.minutes
  document.getElementById('seconds').textContent = time.seconds
},function() {
  document.getElementById('countdown-end').setAttribute('style', 'display: block;')
})

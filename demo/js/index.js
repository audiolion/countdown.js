'use strict';

var Countdown = require('../../dist/countdown.min.js')

var now = new Date()
var ten_seconds = (1000*62)
var end = new Date(now.getTime() + ten_seconds)
var countdown = Countdown.timer(end, function(time) {
  document.getElementById('days').textContent = time.days
  document.getElementById('hours').textContent = time.hours
  document.getElementById('minutes').textContent = time.minutes
  document.getElementById('seconds').textContent = time.seconds
},function() {
  document.getElementById('seconds').textContent = '0'
  document.getElementById('countdown-end').setAttribute('style', 'display: block;')
})

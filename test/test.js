'use strict';

var Promise = require('promise')
var Countdown = require('../')
var test = require('tape')

test('timing test', function(t) {
  var today = new Date()
  var five_seconds = (1000*5)
  var tick_value = 6

  Countdown.timer(new Date(today.getTime() + five_seconds), function (timeLeft) {
    t.ok(timeLeft.seconds < tick_value, 'Ticker value decreased by 1 second in onTick callback')
    tick_value = timeLeft.seconds
  }, function() {
    t.pass('onComplete callback occurred')
  })
  t.end()
})

test('transition test', function (t) {
  var today = new Date()
  var one_minute_two_seconds = (1000*62)
  var ticks_to_zero_minute = 3
  var timer = Countdown.timer(new Date(today.getTime() + one_minute_two_seconds), function(timeLeft) {
    if(ticks_to_zero_minute > 0){
      t.equal(timeLeft.minutes, 1, true)
    }else{
      if (!t.equal(timeLeft.minutes, 0, true)) {
        timer.abort()
      }
    }
    ticks_to_zero_minute -= 1
    if(ticks_to_zero_minute === -2){
      t.pass('transition case passed')
      timer.abort()
    }
  }, function () {
    t.pass('callback should not occur')
  })
  t.end()
})

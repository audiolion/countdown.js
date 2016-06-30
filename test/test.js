'use strict';

var Countdown = require('../')
var test = require('tape')

test('timing test', function(t) {
  t.plan(11)
  var today = new Date()
  var five_seconds = (1000*5)
  var tick_value = 6

  var timer = Countdown.timer(new Date(today.getTime() + five_seconds), function (timeLeft) {
    t.ok(timeLeft.seconds < tick_value, 'Ticker value decreased by 1 second in onTick callback')
    tick_value = timeLeft.seconds
  }, function() {
    t.pass('onComplete callback occurred')
  })
  var time = timer.getTimeRemaining()
  t.ok(time.seconds < 6, 'Ticker seconds decreasing')
  t.equal(time.minutes, 0, true)
  t.equal(time.hours, 0, true)
  t.equal(time.days, 0, true)
  t.timeoutAfter(10000)
});

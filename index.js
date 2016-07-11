'use strict';

var Countdown = function(){}

Countdown.timer = function(end, onTick, onComplete) {
  var timeLeft = end - new Date();

  var timeAPI = {
    DAYS: 1000 * 60 * 60 * 24,
    HOURS: 1000 * 60 * 60,
    MINUTES: 1000 * 60,
    SECONDS: 1000
  }

  var tick = function() {
    if(timeLeft > 0) {
      var time = timeLeft
      var days = Math.floor(time / (timeAPI.DAYS))
      time %= timeAPI.DAYS
      var hours = Math.floor(time / (timeAPI.HOURS))
      time %= timeAPI.HOURS
      var minutes = Math.floor(time / (timeAPI.MINUTES))
      time %= timeAPI.MINUTES
      var seconds = Math.floor(time / (timeAPI.SECONDS))

      var countdown = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
      onTick(countdown)
      timeLeft -= 1000
    }else {
      timeLeft -= 1000
      clearInterval(interval),
      onComplete()
    }
  }

  var interval = setInterval(
    (function(self){
      return function(){
        tick.call(self)
      }
    })(this), 1000
  )

  var getTimeRemaining = function() {
      var time = timeLeft
      var days = Math.floor(time / timeAPI.DAYS)
      time %= timeAPI.DAYS
      var hours = Math.floor(time / timeAPI.HOURS)
      time %= timeAPI.HOURS
      var minutes = Math.floor(time / timeAPI.MINUTES)
      time %= timeAPI.MINUTES
      var seconds = Math.floor(time / timeAPI.SECONDS)

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    }

  tick.call(this)

  return {
    abort: function() {
      clearInterval(interval)
    },
    getTimeRemaining: getTimeRemaining
  }
}

module.exports = Countdown;

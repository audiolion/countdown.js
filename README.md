# countdown.js
Very lightweight (0.39kb minified and gzipped), no dependencies Countdown Timer that provides a simple API to get various time formats

## Install

`npm install countdown-js`

or clone directly from this repository

## Usage

See the demo file for an example.

Create an `index.js` file

```javascript
var Countdown = require('countdown-js')

// setup end datetime for timer
var ten_days = 1000 * 60 * 60 * 24 * 10
var end = new Date(new Date().getTime() + ten_days)

var timer = Countdown.timer(end, function(timeLeft) {
  console.log(timeLeft)
  console.log(timeLeft.days)
  console.log(timeLeft.hours)
  console.log(timeLeft.minutes)
  console.log(timeLeft.seconds)
}, function() {
  console.log("Countdown Finished!")
})
```

Run `uglify-js` to minify your file and `browserify` on your `index.js` so it can be run in the browser

```shell
npm install -g uglify-js browserify
uglifyjs ./index.js -o index.min.js -c -m | browserify -g uglifyify ./index.min.js > bundle.js
```

Include your `bundle.js` in your code right before the closing `</body>` tag so it doesn't need to wait for DOM.ready signal.

```html
<script src="./bundle.js"></script>
```

## Contributing

Fork the repository and clone it

Set up the development environment

```shell
npm install
```

After making changes run the following from the root countdown.js folder to test the demo and ensure it still works

```shell
uglifyjs ./index.js -o dist/countdown.min.js -c -m | browserify -g uglifyify demo/js/index.js > demo/js/bundle.js
```

Make any changes, update `test/*.js` files as appropriate.

Before committing run `npm run test` to ensure all tests pass

Make a pull request! Thanks!

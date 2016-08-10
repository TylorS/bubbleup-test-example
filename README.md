# Bubbleup Test Example 

A very basic example of [Bubbleup](https://github.com/TylorS/bubbleup) using
[bubbleup-plugin-test-mocha](https://github.com/Tylors/bubbleup-plugin-test-mocha)
to run our tests using Mocha, and 
[bubbleup-plugin-test-mocha-buba](https://github.com/TylorS/bubbleup-plugin-test-mocha-buba)
to allow writing our tests with ES6 + using [buba](https://github.com/davidchase/buba).

For a build system it uses a [rollup plugin](https://github.com/TylorS/bubble-plugin-build-rollup) further configured to use umd builds with [rollup-umd](https://github.com/TylorS/bubble-plugin-build-rollup-umd) and [buble](https://github.com/TylorS/bubble-plugin-build-rollup-buble).

## Usage

```sh
git clone https://github.com/TylorS/bubbleup-test-example
cd bubbleup-test-example
npm install
# run tests
npm test
# run build system
npm run build
```

That's it!

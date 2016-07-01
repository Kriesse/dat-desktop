
# dat-desktop

WIP desktop app for [dat](https://github.com/maxogden/dat).

![](screenshot.png)

[![Build Status](https://travis-ci.org/juliangruber/dat-desktop.svg?branch=master)](https://travis-ci.org/juliangruber/dat-desktop)

[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

## Running

```bash
$ npm install
$ npm run rebuild
$ npm start
```

## Watch and compile SCSS

```bash
$ npm run watch-css
```

Then drop files onto the app window and watch the console.

## CLI

-- `--data=DIR` overwrite the data path

## Styles

For now, check out

- `lib/render.js` for html
- `/scss/main.scss` for scss

Styles are imported from https://github.com/datproject/design. All variables, mixins, and component styles are available in main.

There's also the html being generated by [hyperdrive-ui](https://github.com/karissa/hyperdrive-ui).

## License

  MIT

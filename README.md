# thumbsup-message-generator
Why not

## installing
Make sure you have `npm` installed and run the following commands:

`npm install jspm -g`

`npm install jspm-server -g`

## running
Simply run `jspm-server` in the root directory.

## releasing
`git checkout gh-pages`

`git merge master`

`jspm bundle lib/main --inject`

Make sure the `baseUrl` in `config.js` is http://jordylangen.github.io/thumbsup-message-generator/
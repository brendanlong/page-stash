This project is a server and web application for saving web pages to read later, similar to Pocket, Instapaper, Wallabag, etc.

## Why so NIH?

I don't like Pocket's design, and I have concerns about Instapaper's future (as it was recently bought by Pinterest). Both are closed source, which means I can't fix any problems I have with them.

Wallabag is open source, but it's written in PHP. I have no interest in writing PHP in my free time, and [for various reasons](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/#security), I don't trust it on my server.

## Design

The server has an experimental design, where every page is available as a REST API endpoint, and a custom middleware function renders the JSON response via [vue.js](https://vuejs.org/v2/guide/) if the requested output is HTML. This lets us ensure that the REST API provides everything needed for an app (since the render is using the REST response) without the overhead and design complexity of actually making the REST server separate. Vue.js was chosen because it seems similar to React, without the starting complexity, and with better documentation for [server side rendering](https://vuejs.org/v2/guide/ssr.html).

The project uses [Mocha](https://mochajs.org/) and [better-assert](https://github.com/tj/better-assert) for tests. This lets us find tests automatically, and write tests in a straightforward way (`assert(x === y)` instead of `assert.equal(x, y)`).


# IRMA web glue

This package provides the glue between IRMA flow styling and IRMA flow logic. It
has been set up to make it easy to swap out different designs (markup and css)
and/or different logic that communicates with an IRMA back-end. These two worlds
communicate with each other through manipulating a state machine.

This package is designed as a semi-drop-in-replacement for the [`irmajs`](https://github.com/privacybydesign/irmajs)
package. If you replace `irmajs` with this package it will make the whole IRMA
flow look and act like [`irma-web-frontend`](https://github.com/nuts-foundation/irma-web-frontend).

This package has been designed and tested to work with the browsers Chrome,
Firefox, Safari, Opera, Edge and IE11.

If you have an [IRMA server](https://irma.app/docs/irma-server/) running over
HTTPS you can try out this [live demo](https://nuts-foundation.github.io/irma-web-glue/).

## Current state

`irma-web-glue` should be fully functional on desktop and Android. There's
[an issue](https://github.com/nuts-foundation/irma-web-glue/issues/2) (probably
[in `irmajs`](https://github.com/privacybydesign/irmajs/issues/2)) that makes
disclosure flows fail more often than succeed on iOS. Depending on your use-case
this may or may not be a reason to wait a few weeks before adopting this package.

## Design considerations

We want to make embedding an IRMA disclosure flow in your website as simple as
we can. Because of this we have chosen a similar though slightly simpler API
than the `irmajs` API. `irma-web-glue` intends to be your one stop shop to
import in your project and launch into good-looking IRMA flows in the web
browser with zero hassle. If you feel that we can do better in this regard,
please [let us know](https://github.com/nuts-foundation/irma-web-glue/issues) 😉.

## How to use in your application

This package only contains the Javascript part of the IRMA flow, you will have
to combine it with a CSS counterpart like [`irma-web-frontend`](https://github.com/nuts-foundation/irma-web-frontend).
Or you can choose to write your own styling.

### Embedding

#### The old fashioned way

There is a normal version and a minified version of the Javascripts [available
for download on Github](https://github.com/nuts-foundation/irma-web-glue/tree/master/dist)
that you can include in your own project.

If you include the `irma-web-glue[.min].js` file in your HTML, you will have
`IrmaWebGlue` available as a class (on `window`).

#### The way the cool kids do it

Alternatively, you can install it as an npm package. This can be useful if you
want to use only parts of the package and roll your own glue, if you need to
package it in some complicated way (frameworks, for example) or if you want to
stay up to date.

```bash
$ npm install irma-web-glue
```

`irmajs` is built in to this package, so you don't need to add that as an extra
dependency. If you want you can remove any existing dependencies on it your own
project.

You can then import the `IrmaWebGlue` class like so:

```javascript
import IrmaWebGlue from "irma-web-glue";
```

### Usage

See `example/index.html` for a complete example. This section explains how the
different parts go together.

Just like `irmajs` we need an IRMA server and a request:

```javascript
// The usual configuration for irmajs
const server = "http://localhost:8088";
const request = {
  type: 'disclosing',
  content: [{
      label:        'Over 18',
      attributes: [ 'irma-demo.MijnOverheid.ageLower.over18' ]
  }]
};
```

But instead of feeding these directly to `irmajs` you hand them to a new
instance of the `IrmaWebGlue` class:

```javascript
// Initialize irma-web-glue
let irmaForm = document.getElementById('irma-web-form');
let glue     = new IrmaWebGlue(irmaForm);

glue.startFlow(server, request)
    .then(function(result) { alert("Successful disclosure! 🎉"); console.log(result); })
    .catch(function(state) { alert("Disclosure failed in state '" + state + "' 🤨") });
```

`irma-web-form` in this case is the ID of an element that `irma-web-glue` will
render the interface in to. To prevent flickering, it helps if this element has
already been pre-filled with the right markup. For `irma-web-frontend` this is:

```html
<section class="irma-web-form" id="irma-web-form">
  <header class="header">
    <p>Inloggen met <i class="irma-web-logo">IRMA</i></p>
  </header>
  <section class="content">
    <section class="centered">
      <!-- State: Uninitialized -->
      <div class="irma-web-loading-animation">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <p>Eén moment alsjeblieft</p>
    </section>
  </section>
</section>
```

### Customizing

You can override some behaviour, most `irmajs` options and all the strings used
in the front-end (for example to implement translations). See
`src/irma-web-glue.js`, `src/frontends/irma-web.js` and `src/backends/irmajs.js`
for all options. An example:

```javascript
const options = {
  frontEndOptions: {
    showHelper: true,
    translations: {
      helper: 'Hello world 🌍'
    }
  }
};

let glue = new IrmaWebGlue(irmaForm, options);
```

This could do with a good manual or reference. If you feel like writing one, let
us know 😉

## Contributing

### Compiling locally

Requires a working `git` and `npm` on your machine.

```bash
# Clone the project
$ git clone git@github.com:nuts-foundation/irma-web-glue.git

# Install dependencies
$ cd irma-web-glue
$ npm install

# Run the dev server
$ npm run serve
```

You should now have the example running on
[http://localhost:8080](http://localhost:8080).

For this example you need a working [IRMA server](https://irma.app/docs/irma-server/).

Any change you make to the javascript will trigger a rebuild of the project
and automatically refresh in the browser.

### Making PRs

Feel free to make pull requests on this repository. If you do, please sign off
your commits. We sign off commits to indicate that we, as authors, are okay with
releasing this software under the license in the `LICENSE` file.

```bash
$ git commit --signoff -m "Made some awesome changes"
```

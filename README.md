[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

# bu-button

bu-button is a button. It has some types such as submit, google and facebook.

<!--
```
<custom-element-demo>
  <template>
    <script type="module">
      import './bu-button.js';
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<bu-button submit type="button" name="login" text="login"></bu-button>
<bu-button flat type="button" name="resetPass" text="if you forget your password"></bu-button>
<bu-button google type="button" text="Google Login"></bu-button>
<bu-button facebook type="button" text="Facebook Login"></bu-button>
```

## Installation

```
npm install --save bu-button
```

## Usage

### In an html file

```
<html>
  <head>
    <script type="module">
      import './bu-button.js';
    </script>
  </head>
  <body>
    <bu-button submit type="button" name="login" text="login"></bu-button>
    <bu-button flat type="button" name="resetPass" text="if you forget your password"></bu-button>
    <bu-button google type="button" text="Google Login"></bu-button>
    <bu-button facebook type="button" text="Facebook Login"></bu-button>
  </body>
</html>
```

### In a Polymer 3 element

```
import {PolymerElement, html} from '@polymer/polymer';
import './bu-button.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <bu-button submit type="button" name="login" text="login"></bu-button>
      <bu-button flat type="button" name="resetPass" text="if you forget your password"></bu-button>
      <bu-button google type="button" text="Google Login"></bu-button>
      <bu-button facebook type="button" text="Facebook Login"></bu-button>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

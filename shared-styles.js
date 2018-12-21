import "@polymer/polymer/polymer-element.js";

const $_documentContainer = document.createElement("template");
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
    }

    a:hover {
      text-decoration: none;
    }

    button:hover {
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }

    body {
      font-size: 12px;
      line-height: 1;
      background: #fff;
      color: #393E46;
      font-family: 'Noto', 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }

    ul:after {
      display: block;
      content: "";
      clear: both;
    }

    nav ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      text-decoration: none;
      vertical-align: baseline;
      background: transparent;
    }

    /* change colours to suit your needs */
    ins {
      background-color: #ff9;
      color: #000;
      text-decoration: none;
    }

    /* change colours to suit your needs */
    mark {
      background-color: #ff9;
      color: #000;
      font-style: italic;
      font-weight: bold;
    }

    del {
      text-decoration: line-through;
    }

    abbr[title], dfn[title] {
      border-bottom: 1px dotted;
      cursor: help;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /* change border colour to suit your needs */
    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #cccccc;
      margin: 1em 0;
      padding: 0;
    }

    input, select {
      vertical-align: middle;
    }

    ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      vertical-align: bottom;
      border: none;
    }

    article {
      padding: 50px 0;
      max-width: 700px;
      margin: 0 auto;
      min-height: 100vh;
    }

    @media screen and (max-width: 700px) {
      article {
        max-width: 90%;
        padding: 35px 0;
      }
    }

    form select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-size: 16px;
    }

    form ::-webkit-input-placeholder {
      color: #aaa !important;
      font-size: 16px;
      font-weight: normal;
    }

    form :-ms-input-placeholder {
      color: #aaa !important;
      font-size: 16px;
      font-weight: normal;
    }

    form ::-ms-input-placeholder {
      color: #aaa !important;
      font-size: 16px;
      font-weight: normal;
    }

    form ::placeholder {
      color: #aaa !important;
      font-size: 16px;
      font-weight: normal;
    }

    @media screen and (max-width: 780px) {
      form ::-webkit-input-placeholder {
        /*padding-top: 0.25em;*/
      }
      form :-ms-input-placeholder {
        /*padding-top: 0.25em;*/
      }
      form ::-ms-input-placeholder {
        /*padding-top: 0.25em;*/
      }
      form ::placeholder {
        /*padding-top: 0.25em;*/
      }
    }

    form span.wpcf7-not-valid-tip {
      color: #f00;
      font-size: 1em;
      display: block;
      font-size: 12px;
      padding: 10px 0 0;
    }

    form .wpcf7c-conf {
      background: #f4f4f4 !important;
    }

    form div.wpcf7-response-output {
      margin: 2em 0.5em 1em;
      padding: 1em 1em;
      text-align: center;
      line-height: 1.6;
    }

    @media screen and (max-width: 720px) {
      form div.wpcf7-response-output {
        text-align: left;
      }
    }

    form ::-webkit-placeholder {
      /*padding-top: 0.25em;*/
    }

    form ::-moz-placeholder {
      color: #aaa;
      opacity: 1;
    }

    form ::-moz-placeholder {
      color: #aaa;
      opacity: 1;
    }

    form ::-ms-input-placeholder {
      color: #aaa;
    }

    form textarea {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 5px;
      border-radius: 0;
      -webkit-appearance: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      font-size: 16px;
      line-height: 1.5;
    }

    form input {
      -webkit-transition: border-color 0.3s;
      -o-transition: border-color 0.3s;
      transition: border-color 0.3s;
    }

    form input[type="text"]:focus,
    form input[type="password"]:focus,
    form input[type="email"]:focus,
    form input[type="tel"]:focus,
    form input[type="button"]:focus,
    form select:focus,
    form textarea:focus {
      outline: 0;
      border-color: #FFB400 !important;
    }

    form input[type="text"],
    form input[type="email"],
    form input[type="tel"],
    form input[type="password"] {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 3px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0;
      border: 0;
      padding: 0 5px;
      font-size: 16px;
    }

    form span.wpcf7-list-item {
      margin: 0 !important;
    }

    form input[type="submit"],
    form input[type="button"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-transition: opacity .5s;
      -o-transition: opacity .5s;
      transition: opacity .5s;
      border: none;
    }

    form input[type="submit"]:hover,
    form input[type="button"]:hover {
      opacity: 0.7;
      -webkit-box-shadow: none;
      box-shadow: none;
    }


    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

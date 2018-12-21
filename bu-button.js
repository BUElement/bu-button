import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";

class BUButton extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host([submit]) .button {
          display: block;
          max-width: 350px;
          width: 100%;
          margin: 0 auto;
          padding: 15px 0;
          border-radius: 100px;
          color: #fff;
          font-weight: bold;
          font-size: 18px;
          background-image: -webkit-gradient(linear, left top, right top, from(#FFCB00), to(#FFB400));
          background-image: -webkit-linear-gradient(left, #FFCB00, #FFB400);
          background-image: -o-linear-gradient(left, #FFCB00, #FFB400);
          background-image: linear-gradient(to right, #FFCB00, #FFB400);
          margin-bottom: 10px;
          cursor: pointer;
        }

        :host([flat]) .button {
          display: block;
          max-width: 350px;
          width: 100%;
          margin: 0 auto;
          color: #000;
          padding: 10px 0;
          font-size: 16px;
          cursor: pointer;
          background: none;
        }

        :host([google]), :host([facebook]) {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          margin-top: 40px;
        }

        :host([google]) .button, :host([facebook]) .button {
          display: block;
          max-width: 320px;
          width: 100%;
          padding: 15px 0;
          font-size: 18px;
          border-radius: 100px;
          text-align: center;
          letter-spacing: 1px;
          -webkit-transition: opacity .5s;
          -o-transition: opacity .5s;
          transition: opacity .5s;
        }

        :host([google]) .button, :host([facebook]) .button :hover {
          opacity: 0.8;
        }

        :host([google]) .button span, :host([facebook]) .button span {
          display: inline-block;
          padding-left: 50px;
          position: relative;
        }

        :host([google]) .button span::before, :host([facebook]) .button span::before {
          display: block;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center cetner;
        }

        :host([google]) .button {
          -webkit-transition: opacity .5s, border .5s, color .5s;
          -o-transition: opacity .5s, border .5s, color .5s;
          transition: opacity .5s, border .5s, color .5s;
          color: #000;
          border: 1px solid #000;
        }

        :host([google]) .button:hover {
          color: #666;
          border: 1px solid #666;
        }

        :host([google]) .button span::before {
          background-image: url(images/layouts/login/glogo.png);
        }

        :host([facebook]) .button {
          background: #4267B2;
          border: 1px solid #4267B2;
          color: #fff;
        }

        :host([facebook]) .button span::before {
          background-image: url(images/layouts/login/fblogo.png);
        }
      </style>

      <button class="button" type="[[type]]" name="[[name]]"><span>[[text]]</span></button>
    `;
  }

  static get properties() {
    return {
      type: String,
      name: String,
      placeholder: String,
      text: String
    };
  }
}

window.customElements.define("bu-button", BUButton);

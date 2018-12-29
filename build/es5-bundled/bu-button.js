define(["./node_modules/@polymer/polymer/polymer-element.js","./shared-styles.js"],function(_polymerElement,_sharedStyles){"use strict";function _templateObject_2e7e2e800b6311e99828af7c852c7a1b(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host([submit]) .button {\n          display: block;\n          max-width: 350px;\n          width: 100%;\n          margin: 0 auto;\n          padding: 15px 0;\n          border-radius: 100px;\n          color: #fff;\n          font-weight: bold;\n          font-size: 18px;\n          background-image: -webkit-gradient(linear, left top, right top, from(#FFCB00), to(#FFB400));\n          background-image: -webkit-linear-gradient(left, #FFCB00, #FFB400);\n          background-image: -o-linear-gradient(left, #FFCB00, #FFB400);\n          background-image: linear-gradient(to right, #FFCB00, #FFB400);\n          margin-bottom: 10px;\n          cursor: pointer;\n        }\n\n        :host([flat]) .button {\n          display: block;\n          max-width: 350px;\n          width: 100%;\n          margin: 0 auto;\n          color: #000;\n          padding: 10px 0;\n          font-size: 16px;\n          cursor: pointer;\n          background: none;\n        }\n\n        :host([google]), :host([facebook]) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n          -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n          margin-top: 40px;\n        }\n\n        :host([google]) .button, :host([facebook]) .button {\n          display: block;\n          max-width: 320px;\n          width: 100%;\n          padding: 15px 0;\n          font-size: 18px;\n          border-radius: 100px;\n          text-align: center;\n          letter-spacing: 1px;\n          -webkit-transition: opacity .5s;\n          -o-transition: opacity .5s;\n          transition: opacity .5s;\n        }\n\n        :host([google]) .button, :host([facebook]) .button :hover {\n          opacity: 0.8;\n        }\n\n        :host([google]) .button span, :host([facebook]) .button span {\n          display: inline-block;\n          padding-left: 50px;\n          position: relative;\n        }\n\n        :host([google]) .button span::before, :host([facebook]) .button span::before {\n          display: block;\n          content: \"\";\n          position: absolute;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          margin: auto;\n          width: 18px;\n          height: 18px;\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: center cetner;\n        }\n\n        :host([google]) .button {\n          -webkit-transition: opacity .5s, border .5s, color .5s;\n          -o-transition: opacity .5s, border .5s, color .5s;\n          transition: opacity .5s, border .5s, color .5s;\n          color: #000;\n          border: 1px solid #000;\n        }\n\n        :host([google]) .button:hover {\n          color: #666;\n          border: 1px solid #666;\n        }\n\n        :host([google]) .button span::before {\n          background-image: url(images/layouts/login/glogo.png);\n        }\n\n        :host([facebook]) .button {\n          background: #4267B2;\n          border: 1px solid #4267B2;\n          color: #fff;\n        }\n\n        :host([facebook]) .button span::before {\n          background-image: url(images/layouts/login/fblogo.png);\n        }\n      </style>\n\n      <button class=\"button\" type=\"[[type]]\" name=\"[[name]]\"><span>[[text]]</span></button>\n    "]);_templateObject_2e7e2e800b6311e99828af7c852c7a1b=function _templateObject_2e7e2e800b6311e99828af7c852c7a1b(){return data};return data}var BUButton=function(_PolymerElement){babelHelpers.inherits(BUButton,_PolymerElement);function BUButton(){babelHelpers.classCallCheck(this,BUButton);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BUButton).apply(this,arguments))}babelHelpers.createClass(BUButton,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_2e7e2e800b6311e99828af7c852c7a1b())}},{key:"properties",get:function get(){return{type:String,name:String,placeholder:String,text:String}}}]);return BUButton}(_polymerElement.PolymerElement);window.customElements.define("bu-button",BUButton)});
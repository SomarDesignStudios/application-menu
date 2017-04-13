(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationMenu = function () {
  function ApplicationMenu(element) {
    var _this = this;

    _classCallCheck(this, ApplicationMenu);

    this.el = element;

    this.el.querySelector('.application-menu__button').addEventListener('click', function () {
      _this._handleButtonClick();
    });
  }

  _createClass(ApplicationMenu, [{
    key: '_pressButton',
    value: function _pressButton() {
      this.el.querySelector('.application-menu__button').setAttribute('aria-pressed', 'true');
    }
  }, {
    key: '_unpressButton',
    value: function _unpressButton() {
      this.el.querySelector('.application-menu__button').setAttribute('aria-pressed', 'false');
    }
  }, {
    key: '_expandMenu',
    value: function _expandMenu() {
      this.el.querySelector('.application-menu__menu').setAttribute('aria-expanded', 'true');
    }
  }, {
    key: '_contractMenu',
    value: function _contractMenu() {
      this.el.querySelector('.application-menu__menu').setAttribute('aria-expanded', 'false');
    }
  }, {
    key: '_handleButtonClick',
    value: function _handleButtonClick() {
      var pressed = this.el.querySelector('.application-menu__button').getAttribute('aria-pressed');

      if (pressed === 'true') {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: 'open',
    value: function open() {
      this._pressButton();
      this._expandMenu();
    }
  }, {
    key: 'close',
    value: function close() {
      this._unpressButton();
      this._contractMenu();
    }
  }]);

  return ApplicationMenu;
}();

exports.default = ApplicationMenu;


},{}],2:[function(require,module,exports){
'use strict';

var _ApplicationMenu = require('./ApplicationMenu.js');

var _ApplicationMenu2 = _interopRequireDefault(_ApplicationMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var elements = document.querySelectorAll('.application-menu');
  var applicationMenus = [];

  if (elements.length === 0) {
    return;
  }

  elements.forEach(function (element) {
    applicationMenus.push(new _ApplicationMenu2.default(element));
  });
}

init();

// $menuItems.each(function (index, element) {
//   init(element);
// });

// Automatically close menus user click away.
// $(document).click(function (event) {
//   if ($(event.target).closest('.application-menu').length === 0) {
//     closeAll();
//   }
// });


},{"./ApplicationMenu.js":1}]},{},[2]);

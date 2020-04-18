var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';

import styles from './Button.css';

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));

    autobind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = props.className,
          isDisabled = props.isDisabled,
          focusOnClick = props.focusOnClick,
          formSubmit = props.formSubmit,
          otherProps = _objectWithoutProperties(props, ['className', 'isDisabled', 'focusOnClick', 'formSubmit']);

      className = cx(className, styles.root);
      var onMouseDown = focusOnClick === false ? this._onMouseDownPreventDefault : props.onMouseDown;
      var type = formSubmit ? 'submit' : 'button';
      return React.createElement(
        'button',
        _extends({ type: type }, otherProps, { onMouseDown: onMouseDown, className: className, disabled: isDisabled }),
        props.children
      );
    }
  }, {
    key: '_onMouseDownPreventDefault',
    value: function _onMouseDownPreventDefault(event) {
      event.preventDefault();
      var onMouseDown = this.props.onMouseDown;

      if (onMouseDown != null) {
        onMouseDown(event);
      }
    }
  }]);

  return Button;
}(Component);

export default Button;
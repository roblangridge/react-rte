var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import cx from 'classnames';
import Button from './Button';
import ButtonWrap from './ButtonWrap';

import styles from './IconButton.css';

var IconButton = function (_Component) {
  _inherits(IconButton, _Component);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _cx;

      var props = this.props;

      var className = props.className,
          iconName = props.iconName,
          label = props.label,
          children = props.children,
          isActive = props.isActive,
          otherProps = _objectWithoutProperties(props, ['className', 'iconName', 'label', 'children', 'isActive']);

      className = cx(className, (_cx = {}, _defineProperty(_cx, styles.root, true), _defineProperty(_cx, styles.isActive, isActive), _cx));
      return React.createElement(
        ButtonWrap,
        null,
        React.createElement(
          Button,
          _extends({}, otherProps, { title: label, className: className }),
          React.createElement('span', { className: styles['icon-' + iconName] })
        ),
        children
      );
    }
  }]);

  return IconButton;
}(Component);

export default IconButton;
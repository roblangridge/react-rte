var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import IconButton from './IconButton';
import InputPopover from './InputPopover';
import autobind from 'class-autobind';

var PopoverIconButton = function (_Component) {
  _inherits(PopoverIconButton, _Component);

  function PopoverIconButton() {
    _classCallCheck(this, PopoverIconButton);

    var _this = _possibleConstructorReturn(this, (PopoverIconButton.__proto__ || Object.getPrototypeOf(PopoverIconButton)).apply(this, arguments));

    autobind(_this);
    return _this;
  }

  _createClass(PopoverIconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onTogglePopover = _props.onTogglePopover,
          showPopover = _props.showPopover,
          props = _objectWithoutProperties(_props, ['onTogglePopover', 'showPopover']); // eslint-disable-line no-unused-vars


      return React.createElement(
        IconButton,
        _extends({}, props, { onClick: onTogglePopover }),
        this._renderPopover()
      );
    }
  }, {
    key: '_renderPopover',
    value: function _renderPopover() {
      if (!this.props.showPopover) {
        return null;
      }
      return React.createElement(InputPopover, {
        defaultValue: this.props.defaultValue,
        onSubmit: this._onSubmit,
        onCancel: this._hidePopover
      });
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var _props2;

      (_props2 = this.props).onSubmit.apply(_props2, arguments);
    }
  }, {
    key: '_hidePopover',
    value: function _hidePopover() {
      if (this.props.showPopover) {
        var _props3;

        (_props3 = this.props).onTogglePopover.apply(_props3, arguments);
      }
    }
  }]);

  return PopoverIconButton;
}(Component);

export default PopoverIconButton;
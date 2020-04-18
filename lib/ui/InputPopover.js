var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton';
import ButtonGroup from './ButtonGroup';
import autobind from 'class-autobind';
import cx from 'classnames';

import styles from './InputPopover.css';

var InputPopover = function (_Component) {
  _inherits(InputPopover, _Component);

  function InputPopover() {
    _classCallCheck(this, InputPopover);

    var _this = _possibleConstructorReturn(this, (InputPopover.__proto__ || Object.getPrototypeOf(InputPopover)).apply(this, arguments));

    autobind(_this);
    return _this;
  }

  _createClass(InputPopover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this._onDocumentClick);
      document.addEventListener('keydown', this._onDocumentKeydown);
      if (this._inputRef) {
        this._inputRef.focus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._onDocumentClick);
      document.removeEventListener('keydown', this._onDocumentKeydown);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = cx(props.className, styles.root);
      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          'div',
          { className: styles.inner },
          React.createElement('input', {
            ref: this._setInputRef,
            defaultValue: props.defaultValue,
            type: 'text',
            placeholder: 'https://example.com/',
            className: styles.input,
            onKeyPress: this._onInputKeyPress
          }),
          React.createElement(
            ButtonGroup,
            { className: styles.buttonGroup },
            React.createElement(IconButton, {
              label: 'Cancel',
              iconName: 'cancel',
              onClick: props.onCancel
            }),
            React.createElement(IconButton, {
              label: 'Submit',
              iconName: 'accept',
              onClick: this._onSubmit
            })
          )
        )
      );
    }
  }, {
    key: '_setInputRef',
    value: function _setInputRef(inputElement) {
      this._inputRef = inputElement;
    }
  }, {
    key: '_onInputKeyPress',
    value: function _onInputKeyPress(event) {
      if (event.which === 13) {
        // Avoid submitting a <form> somewhere up the element tree.
        event.preventDefault();
        this._onSubmit();
      }
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit() {
      var value = this._inputRef ? this._inputRef.value : '';
      this.props.onSubmit(value);
    }
  }, {
    key: '_onDocumentClick',
    value: function _onDocumentClick(event) {
      var rootNode = ReactDOM.findDOMNode(this);
      if (!rootNode.contains(event.target)) {
        // Here we pass the event so the parent can manage focus.
        this.props.onCancel(event);
      }
    }
  }, {
    key: '_onDocumentKeydown',
    value: function _onDocumentKeydown(event) {
      if (event.keyCode === 27) {
        this.props.onCancel();
      }
    }
  }]);

  return InputPopover;
}(Component);

export default InputPopover;
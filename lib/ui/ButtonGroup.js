var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import cx from 'classnames';

import styles from './ButtonGroup.css';

export default function ButtonGroup(props) {
  var className = cx(props.className, styles.root);
  return React.createElement('div', _extends({}, props, { className: className }));
}
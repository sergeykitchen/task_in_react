import React, {Component} from 'react';
import {createPortal} from 'react-dom';

export default class ModalRemoval extends Component {
  componentWillMount() {
    this.root = document.createElement('div');
    this.root.className = 'modalBack';
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return createPortal(<div>{this.props.children}</div>, this.root);
  }
}

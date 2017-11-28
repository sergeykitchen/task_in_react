import React from 'react';
import Modal from 'react-modal';

export default props => {
  const {closeWindow, isOpen} = props;
  const style = `modal ${props.extraClass}`;
  return (
    <Modal isOpen={isOpen} onRequestClose={closeWindow} className={style}>
      {props.children}
    </Modal>
  );
};

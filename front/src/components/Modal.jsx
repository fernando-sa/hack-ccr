import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Modal.module.sass';

const Modal = (props) => {
  const {
    title, children, openModal, actionOnClose,
  } = props;
  const [isOpen, setIsOpen] = useState(openModal);
  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);
  return (
    <>
      {isOpen === true && (
        <div className={styles.bgModal}>
          <div className={styles.modal}>
            <header className={styles.header}>
              <h1 className={styles.title}>{title}</h1>
            </header>
            <div className={styles.content}>
              {children}
              <button type="button" className={styles.btnClose} onClick={() => actionOnClose()}>Voltar á página inicial</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  openModal: PropTypes.bool,
  actionOnClose: PropTypes.func,
};

Modal.defaultProps = {
  title: 'Modal',
  openModal: false,
  actionOnClose: () => Modal.setIsOpen(false),
};

export default Modal;

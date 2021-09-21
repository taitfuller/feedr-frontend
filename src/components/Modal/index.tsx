import React from "react";
import ReactDOM from "react-dom";
import IconButton from "../IconButton";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  heading: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  heading,
  children,
}: ModalProps) => {
  const modal = (
    <div className={styles.container}>
      <div className={styles.backdrop} />
      <div className={styles.modal} style={{ height: `623px` }}>
        <div className={styles.heading}>
          <h1>{heading}</h1>
          <IconButton
            icon={faTimes}
            size="3x"
            handleOnClick={onClose}
            variant="secondary"
          />
        </div>
        {children}
      </div>
    </div>
  );
  return show ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;

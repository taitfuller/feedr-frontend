import React from "react";
import styles from "./style.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }: CardProps): JSX.Element => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;

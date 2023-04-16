import styles from "./styles.module.css";

import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

export function Form({ children }: FormProps) {
  return <section className={styles.container}>{children}</section>;
}

import React from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <label className={styles.switch} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  </div>
);

export default ThemeToggle;

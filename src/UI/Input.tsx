import clsx from "clsx";
import styles from "../styles/UI/Input.module.scss";
import Icon from "./Icon";

interface InputProps {
  type: "text" | "number" | "password" | "email" | "url" | "tel" | "search";
  title?: string;
  icon?: "search" | "dropdown" | "password" | "calendar" | "arrow";
  placeholder: string;
  disabled?: boolean;
}

function Input({ placeholder, type, title, icon, disabled }: InputProps) {
  const iconClass = clsx(styles.icon, {
    [styles.search]: icon === "search",
    [styles.dropdown]: icon === "dropdown",
    [styles.password]: icon === "password",
    [styles.calendar]: icon === "calendar",
  });

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        id="input"
      ></input>
      {icon && <Icon type={icon} width="24px" height="24px"/>}
    </div>
  );
}

export default Input;

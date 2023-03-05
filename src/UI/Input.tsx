import clsx from "clsx";
import styles from "../styles/UI/Input.module.scss";
import Icon, { IconProps } from "./icons/Icon";

interface InputProps {
  type: "text" | "number" | "password" | "email" | "url" | "tel" | "search";
  title?: string;
  icon?: IconProps["type"];
  placeholder: string;
  label?: string;
  disabled?: boolean;
}

function Input({ placeholder, type, title, icon, disabled, label }: InputProps) {

  return (
    <label className={styles.container}>
      {label && label}
      <input
        className={styles.input}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      ></input>
      {icon && <Icon type={icon} width="24px" height="24px"/>}
    </label>
  );
}

export default Input;

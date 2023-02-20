import clsx from "clsx";
import styles from "../styles/UI/Button.module.scss";
import font from "../styles/base/typography.module.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "green" | "purple" | "honey"|"link";
  type: "button" | "submit" | "reset";
  size?: "large" | "normal"| "medium" | "small" | "extra-small";
  children: string;
  disabled?: boolean;
  // icon?:
  onClick?: () => void;
}


function Button({ variant, type, size, children, disabled }: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.green]: variant === "green",
        [styles.purple]: variant === "purple",
        [styles.link]: variant === "link",
        [styles.large]: size === "large",
        [styles.normal]: size === "normal",
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles['extra-small']]: size === "extra-small",
      })}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

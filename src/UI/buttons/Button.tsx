import clsx from "clsx";
import styles from "../../styles/UI/Button.module.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "green" | "purple" | "honey" | "link";
  type: "button" | "submit" | "reset";
  size?: "large" | "normal" | "medium" | "small" | "extra-small";
  children: string;
  disabled?: boolean;
  // icon?:
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  type,
  size,
  children,
  disabled,
}): JSX.Element => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles[`${variant}`]]: variant === `${variant}`,
        [styles[`${size}`]]: size === `${size}`,
        [styles.disabled]: disabled === true,
      })}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

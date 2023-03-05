import clsx from "clsx";
import Icon, { IconProps } from "../icons/Icon";
import styles from "../../styles/UI/ButtonIcon.module.scss";

interface ButtonIconProps {
  variant: "primary" | "secondary" | "without-bg";
  type: "button" | "submit" | "reset";
  size?: "large" | "normal" | "medium" | "small" | "extra-small";
  width?: string;
  height?: string;
  disabled?: boolean;
  icon: IconProps["type"];
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant,
  type,
  size,
  width,
  height,
  icon,
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
      <Icon type={icon} width={width} height={height}></Icon>
    </button>
  );
};

import clsx from "clsx";
import Icon, { IconProps } from "../Icon";
import styles from "../../styles/UI/ButtonIcon.module.scss";

interface ButtonIconProps {
  variant: "primary" | "secondary" | "without-bg";
  type: "button" | "submit" | "reset";
  size?: "large" | "normal" | "medium" | "small" | "extra-small";
  disabled?: boolean;
  icon: IconProps["type"];
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant,
  type,
  size,
  icon,
  disabled,
}): JSX.Element => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles[`${variant}`]]: variant === `${variant}`,
        [styles[`${size}`]]: size === `${size}`,
      })}
      type={type}
      disabled={disabled}
    >
      <Icon type={icon} width="24px" height="24px"></Icon>
    </button>
  );
};

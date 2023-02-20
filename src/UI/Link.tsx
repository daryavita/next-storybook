import Link from "next/link";
import clsx from "clsx";
import styles from "../styles/UI/Link.module.scss";

interface LinkProps {
  path: string;
  external?: boolean;
  children: string | any;
  disabled?: boolean;
  style?: "large" | "medium" | "small" | "body-lg" | "h6" | "menu";
  color?: "white" | "black" | "blue" | "primary" | "disabled";
  hover?: "hover-blue" | "hover-black" | "hover-primary" | "hover-underline";
  live?: boolean;
}

function LinkMod({
  external = false,
  path = "/",
  children,
  style,
  color,
  hover,
  live = false,
}: LinkProps) {
  const className = clsx(styles.link, {
    [styles[`${style}`]]: style === `${style}`,
    [styles[`${color}`]]: color === `${color}`,
    [styles[`${hover}`]]: hover === `${hover}`,
  });

  return external ? (
    <a
      href={path}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={path} className={className}>
      {children}
      {live && <div className={styles.circle}></div>}
    </Link>
  );
}

export default LinkMod;

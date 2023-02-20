import Link from "next/link";
import clsx from "clsx";
import styles from "../styles/UI/Link.module.scss";

interface LinkProps {
  path: string;
  external?: boolean;
  children: string | any;
  disabled?: boolean;
  style?: "large" | "medium" | "small" | "body-lg" | "h6"|"menu";
  color?: "white" | "black" | "blue" | "primary";
  live?: boolean;
}

function LinkMod({
  external = false,
  path = "/",
  children,
  style,
  color,
  live = false,
}: LinkProps) {
  const className = clsx(styles.link, {
    [styles.large]: style === "large",
    [styles.medium]: style === "medium",
    [styles.small]: style === "small",
    [styles.h6]: style === "h6",
    [styles.menu]: style === "menu",
    [styles.white]: color === "white",
    [styles.black]: color === "black",
    [styles.blue]: color === "blue",
    [styles.primary]: color === "primary",
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

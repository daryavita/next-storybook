import Search from "../../public/images/icons/search.svg";
import MapPin from "../../public/images/icons/map-pin.svg";
import ArrowDown from "../../public/images/icons/arrow-down.svg";
import Like from "../../public/images/icons/like.svg";
import ShoppingCart from "../../public/images/icons/shopping-cart.svg";
import UserIcon from "../../public/images/icons/user.svg";
import Fire from "../../public/images/icons/fire.svg";
import styles from "../styles/UI/Icon.module.scss";
import clsx from "clsx";

export interface IconProps {
  type:
    | "search"
    | "dropdown"
    | "password"
    | "calendar"
    | "arrow"
    | "map-pin"
    | "like"
    | "shopping-cart"
    | "user"
    | "fire";
  width: string;
  height: string;
  color?: 'white'|"black"|'gray'|'primary'
  // disabled?: boolean;
}

function Icon({ type, width, height, color }: IconProps) {
  const className = clsx(styles.icon, {
    [styles[`${color}`]]: color === `${color}`,
  });

  switch (type) {
    case "search":
      return <Search className={className} width={width} height={height} />;
      break;
    case "arrow":
      return (
        <ArrowDown className={className} width={width} height={height} />
      );
      break;
    case "map-pin":
      return <MapPin className={className} width={width} height={height} />;
      break;
    case "like":
      return <Like className={className} width={width} height={height} />;
      break;
    case "shopping-cart":
      return (
        <ShoppingCart className={className} width={width} height={height} />
      );
      break;
    case "user":
      return <UserIcon className={className} width={width} height={height} />;
      break;
    case "fire":
      return <Fire className={className} width={width} height={height} />;
      break;
  }

  return (
    <></>

    // <Search className={styles.icon}/>
  );
}

export default Icon;

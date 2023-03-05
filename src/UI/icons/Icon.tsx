import Search from "../../../public/images/icons/search.svg";
import MapPin from "../../../public/images/icons/map-pin.svg";
import ArrowDown from "../../../public/images/icons/arrow-down.svg";
import Like from "../../../public/images/icons/like.svg";
import ShoppingCart from "../../../public/images/icons/shopping-cart.svg";
import UserIcon from "../../../public/images/icons/user.svg";
import Fire from "../../../public/images/icons/fire.svg";
import Vk from "../../../public/images/icons/vk.svg";
import Odnoklassniki from "../../../public/images/icons/odnoklassniki.svg";
import Youtube from "../../../public/images/icons/youtube.svg";
import Telegram from "../../../public/images/icons/telegram.svg";
import Dzen from "../../../public/images/icons/dzen.svg";
import Dsa from "../../../public/images/icons/dsa.svg";
import Cross from "../../../public/images/icons/cross.svg";
import Edit from "../../../public/images/icons/edit.svg";
import styles from "../../styles/UI/Icon.module.scss";
import clsx from "clsx";

export interface IconProps {
  type:
    | "search"
    | "dropdown"
    | "password"
    | "calendar"
    | "arrow-down"
    | "map-pin"
    | "like"
    | "shopping-cart"
    | "user"
    | "fire"
    | "vk"
    | "odnoklassniki"
    | "youtube"
    | "telegram"
    | "dzen"
    | "dsa"
    | "cross"
    | "edit";
  width?: string;
  height?: string;
  color?: "white" | "black" | "gray" | "primary";
  hover?: "hover-blue" | "hover-black" | "hover-primary";
  className?: string;
  // disabled?: boolean;
}

function Icon({ type, width, height, color, hover, className }: IconProps) {
  const styleClass = clsx(styles.icon, className, {
    [styles[`${color}`]]: color === `${color}`,
    [styles[`${hover}`]]: hover === `${hover}`,
  });

  switch (type) {
    case "search":
      return <Search className={styleClass} width={width} height={height} />;
      break;
    case "arrow-down":
      return <ArrowDown className={styleClass} width={width} height={height} />;
      break;
    case "map-pin":
      return <MapPin className={styleClass} width={width} height={height} />;
      break;
    case "like":
      return <Like className={styleClass} width={width} height={height} />;
      break;
    case "shopping-cart":
      return (
        <ShoppingCart className={styleClass} width={width} height={height} />
      );
      break;
    case "user":
      return <UserIcon className={styleClass} width={width} height={height} />;
      break;
    case "fire":
      return <Fire className={styleClass} width={width} height={height} />;
      break;
    case "vk":
      return <Vk className={styleClass} width={width} height={height} />;
      break;
    case "odnoklassniki":
      return (
        <Odnoklassniki className={styleClass} width={width} height={height} />
      );
      break;
    case "youtube":
      return <Youtube className={styleClass} width={width} height={height} />;
      break;
    case "telegram":
      return <Telegram className={styleClass} width={width} height={height} />;
      break;
    case "dzen":
      return <Dzen className={styleClass} width={width} height={height} />;
      break;
    case "dsa":
      return <Dsa className={styleClass} width={width} height={height} />;
      break;
    case "cross":
      return <Cross className={styleClass} width={width} height={height} />;
      break;
    case "edit":
      return <Edit className={styleClass} width={width} height={height} />;
      break;
  }

  return (
    <></>

    // <Search className={styles.icon}/>
  );
}

export default Icon;

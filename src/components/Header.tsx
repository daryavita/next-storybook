import Avatar from "../UI/Avatar";
import { Button } from "../UI/buttons/Button";
import Icon from "../UI/icons/Icon";
import Input from "../UI/Input";
import LinkMod from "../UI/Link";
import Image from "next/image";
import styles from "../styles/blocks/Header.module.scss";
import Catalogue from "./Catalogue";
import { IconCount } from "../UI/icons/IconCount";

interface HeaderProps {
  // user?: User;
  isLogin?: boolean;
}

function Header({ isLogin = true }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.black}>
        <div>
          <button className={styles['location-btn']}>
            <Icon type="map-pin" width="16px" height="16px" />
            <span className={styles["bold-text"]}>Екатеринбург</span>
          </button>
        </div>
        <div className={styles.grid}>
          <nav className={styles.nav}>
            <LinkMod path="/about" color="white" style="body-lg">
              О компании
            </LinkMod>
            <LinkMod path="/business" color="white" style="body-lg">
              Бизнес
            </LinkMod>
            <LinkMod path="/stores" color="white" style="body-lg">
              Магазины и пункты выдачи
            </LinkMod>
            <LinkMod path="/delivery-and-payment" color="white" style="body-lg">
              Доставка и оплата
            </LinkMod>
            <LinkMod path="/blog" color="white" style="body-lg">
              Блог
            </LinkMod>
            <LinkMod path="/live" color="white" style="body-lg" live={true}>
              Живые эфиры
            </LinkMod>
            <LinkMod path="/news" color="white" style="body-lg">
              Новости
            </LinkMod>
          </nav>
          <p className={styles["bold-text"]}>8-800-200-19-57</p>
          <div className={styles.lang}>
            <button className={styles["lang-btn"]}>
              <span className={styles["bold-text"]}>RUS</span>
              <Icon type="arrow-down" width="9.33px" height="5.33px" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.white}>
        <div className={styles.gap}>
          <LinkMod path="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              className={styles.logo}
              width={264.35}
              height={44}
              priority
            />
          </LinkMod>

          <div className={styles.stretch}>
            <Input
              type="text"
              icon="search"
              placeholder="Что хотите найти?"
            ></Input>

            <div className={styles.cart}>
              <div className={styles.column}>
                <Icon type="like" width="24px" height="24px" />
                <LinkMod
                  //нет ссылки в ТЗ
                  path="/"
                  style="h6"
                  color="black"
                >
                  Избранное
                </LinkMod>
              </div>
              <div className={styles.column}>
                <IconCount
                  type="shopping-cart"
                  width="24px"
                  height="24px"
                  count={101}
                />
                <LinkMod path="/cart" style="h6" color="black">
                  Корзина
                </LinkMod>
              </div>

              {isLogin ? (
                <div className={styles.column}>
                  <Avatar online priority width={48} height={48} />
                  <LinkMod path="/lk" style="h6" color="blue">
                    Крохалева Анастасия
                  </LinkMod>
                </div>
              ) : (
                <div className={styles.column}>
                  <Icon type="user" width="24px" height="24px" />
                  <Button variant="link" type="button">
                    Войти
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Catalogue />
      </div>
    </header>
  );
}

export default Header;

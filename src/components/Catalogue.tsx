import Icon from "../UI/Icon";
import LinkMod from "../UI/Link";
import styles from "../styles/blocks/Catalogue.module.scss";

function Catalogue() {
  return (
    <nav className={styles.nav}>
      <div className={styles.column}>
        <Icon type="fire" width="24px" height="24px" />
        <LinkMod path="/#" style="h6" color="primary">
          АКЦИИ
        </LinkMod>
      </div>
      <LinkMod path="/#" style="menu" color="black">
        НОВИНКИ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ЗДОРОВЬЕ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        КРАСОТА
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ЗДОРОВАЯ ЕДА
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        МАМАМ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ДЕТЯМ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ПИТОМЦАМ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ФИРМЕННЫЕ ТОВАРЫ
      </LinkMod>
      <LinkMod path="/#" style="menu" color="black">
        ВСЕ ТОВАРЫ
      </LinkMod>
    </nav>
  );
}

export default Catalogue;

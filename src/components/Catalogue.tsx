import Icon from "../UI/icons/Icon";
import LinkMod from "../UI/Link";
import styles from "../styles/blocks/Catalogue.module.scss";

function Catalogue() {
    
  const linkArr = [
    { path: "/#", cildren: "НОВИНКИ" },
    { path: "/#", cildren: "ЗДОРОВЬЕ" },
    { path: "/#", cildren: "КРАСОТА" },
    { path: "/#", cildren: "ЗДОРОВАЯ ЕДА" },
    { path: "/#", cildren: "МАМАМ" },
    { path: "/#", cildren: "ДЕТЯМ" },
    { path: "/#", cildren: "ПИТОМЦАМ" },
    { path: "/#", cildren: "ФИРМЕННЫЕ ТОВАРЫ" },
    { path: "/#", cildren: "ВСЕ ТОВАРЫ" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.column}>
        <Icon type="fire" width="24px" height="24px" />
        <LinkMod path="/#" style="h6" color="primary">
          АКЦИИ
        </LinkMod>
      </div>
      {linkArr.map((link, index) => (
        <LinkMod key={index} path={link.path} style="h6" color="black" className={styles['hover-underline']}>
          {link.cildren}
        </LinkMod>
      ))}
    </nav>
  );
}

export default Catalogue;

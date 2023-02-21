import Icon from "../UI/Icon";
import LinkMod from "..//UI/Link";
import styles from "../styles/blocks/Footer.module.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (): JSX.Element => {
  const groupOne = [
    { path: "/about", children: "Завод TENTORIUM RULAND" },
    { path: "/parasol", children: "Племенной репродуктор «Парасоль»" },
    {
      path: "https://rgbrosstudio.com/",
      children: "RG Bros Studio",
      external: true,
    },
    {
      path: "https://termy-tentorium.ru/",
      children: "Термы Тенториум",
      external: true,
    },
  ];

  const groupTwo = [
    { path: "/edu", children: "Академия Тенториум" },
    { path: "/medovyj-meridian", children: "Медовый Мередиан" },
    {
      path: "https://pchelografiya.ru/",
      children: "Мультсериал «Пчелография»",
      external: true,
    },
    {
      path: "https://tentorium.world/",
      children: "Международный интернет-магазин, Tentorium World",
      external: true,
    },
    {
      path: "https://tentorium.com.tr/",
      children: "Tentorium Turkey",
      external: true,
    },
  ];

  const groupThree = [
    { path: "/#", children: "Все товары" },
    { path: "/#", children: "Регистрация" },
    { path: "/stores", children: "Магазины и пункты выдачи" },
    { path: "/lk", children: "Личный кабинет" },
    { path: "/business", children: "Бизнес с Тенториум" },
    { path: "/news", children: "Новости" },
    { path: "/blog", children: "Блог" },
  ];

  const groupFour = [
    { path: "/#", type: "vk", external: true },
    { path: "/#", type: "odnoklassniki", external: true },
    { path: "/#", type: "youtube", external: true },
    { path: "/#", type: "telegram", external: true },
    { path: "/#", type: "dzen", external: true },
  ];

  return (
    <footer>
      <div className={styles.gray}>
        <div className={styles.group}>
          <h6 className={styles.title}>ГРУППА КОМПАНИЙ</h6>
          <nav className={styles.nav}>
            {groupOne?.map((item, index) => (
              <LinkMod
                key={index}
                path={item.path}
                style="body-lg"
                color="black"
                external={item.external}
                hover="hover-blue"
              >
                {item.children}
              </LinkMod>
            ))}
          </nav>
        </div>
        <div className={styles.group}>
          <h6 className={styles.title}>ПРОЕКТЫ ТЕНТОРИУМ</h6>
          <nav className={styles.nav}>
            {groupTwo?.map((item, index) => (
              <LinkMod
                key={index}
                path={item.path}
                style="body-lg"
                color="black"
                external={item.external}
                hover="hover-blue"
              >
                {item.children}
              </LinkMod>
            ))}
          </nav>
        </div>
        <div className={styles.group}>
          <h6 className={styles.title}>ИНТЕРНЕТ-МАГАЗИН</h6>
          <nav className={styles.nav}>
            {groupThree?.map((item, index) => (
              <LinkMod
                key={index}
                path={item.path}
                style="body-lg"
                color="black"
                hover="hover-blue"
              >
                {item.children}
              </LinkMod>
            ))}
          </nav>
        </div>
        <div className={styles.group}>
          <h6 className={styles.title}>КОНТАКТЫ</h6>
          <nav className={styles.socials}>
            {groupFour?.map((item: any, index: number) => (
              <LinkMod
                key={index}
                path={item.path}
                external={item.external}
                hover="hover-blue"
              >
                <Icon
                  type={item.type}
                  width="24px"
                  height="24px"
                  hover="hover-blue"
                />
              </LinkMod>
            ))}
          </nav>
          <div className={styles.grid}>
            <p className={styles.title}>
              Для звонков из России
              <span className={styles.contact}>8 800-200-19-57</span>
            </p>
            <p className={styles.title}>
              Для звонков из России
              <span className={styles.contact}>8 800-200-19-57</span>
            </p>
            <p className={styles.contact}>info@tentorium.ru</p>
          </div>
        </div>
      </div>
      <div className={styles.white}>
        <p className={styles.info}>&#169; ТЕНТОРИУМ&#174; 2011-2022</p>
        <LinkMod path="/#" style="body-lg" color="disabled" hover="hover-black">
          Обработка персональных данных
        </LinkMod>
        <LinkMod path="/#" style="body-lg" color="disabled" hover="hover-black">
          Публичная оферта
        </LinkMod>
        <div className={styles.column}>
          <Icon type="dsa" width="28px" height="18.25px" />
          <p className={styles.info}>
            Действительный член Российской Ассоциации прямых продаж
          </p>
        </div>
      </div>
    </footer>
  );
};

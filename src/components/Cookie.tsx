import { Button } from "../UI/buttons/Button";
import { ButtonIcon } from "../UI/buttons/ButtonIcon";
import LinkMod from "../UI/Link";
import styles from "../styles/blocks/Cookie.module.scss";

export const Cookie: React.FC = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <p className={styles.text}>
        Этот сайт использует cookie -файлы и другие технологии, чтобы помочь вам
        в навигации, а также предоставить лучший пользовательский опыт,
        анализировать использование наших продуктов и услуг, повысить качество
        рекламных и маркетинговых активностей. <LinkMod path="/#" style="body-lg" color="blue">Политика конфиденциальности</LinkMod>
      </p>
      <div className={styles.column}>
      <Button variant="green" size="medium" type="submit">Принять</Button>
      <Button variant="secondary" size="medium" type="button">Отклонить</Button>
      </div>
      <ButtonIcon icon="cross" variant="without-bg" type="button" width="24px" height="24px"></ButtonIcon>
    </section>
  );
};

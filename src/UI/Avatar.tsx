import Image from "next/image";
import styles from "../styles/UI/Avatar.module.scss"

function Avatar() {
    return ( 
        <Image
        src="/images/avatar.svg"
        alt="avatar"
        className={styles.avatar}
        width={48}
        height={48}
        priority
        />
     );
}

export default Avatar;
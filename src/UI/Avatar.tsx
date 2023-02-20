import Image from "next/image";
import styles from "../styles/UI/Avatar.module.scss"

interface AvatarProps {
    priority?: boolean;
}

function Avatar({priority}: AvatarProps) {
    return ( 
        <Image
        src="/images/avatar.svg"
        alt="avatar"
        className={styles.avatar}
        width={48}
        height={48}
        priority={priority}
        />
     );
}

export default Avatar;
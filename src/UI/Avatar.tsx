import Image from "next/image";
import styles from "../styles/UI/Avatar.module.scss";

interface AvatarProps {
  priority?: boolean;
  online?: boolean;
  width: number;
  height: number;
}

function Avatar({ priority, online, width, height }: AvatarProps) {
  if (online) {
    return (
      <div className={styles.container}>
        <Image
          src="/images/avatar.svg"
          alt="avatar"
          className={styles.avatar}
          width={width}
          height={height}
          priority={priority}
        />
        <div className={styles.circle}></div>
      </div>
    );
  }

  return (
      <Image
        src="/images/avatar.svg"
        alt="avatar"
        className={styles.avatar}
        width={width}
        height={height}
        priority={priority}
      />
  );
}

export default Avatar;

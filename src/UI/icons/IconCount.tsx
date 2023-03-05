import Icon, { IconProps } from "./Icon";
import styles from "../../styles/UI/IconCount.module.scss";
import { useEffect, useRef, useState } from "react";
// import { Nunito } from "@next/font/google";

// const nunito = Nunito({
//   weight: ["400", "700"],
//   style: ["normal"],
//   subsets: ["latin", "cyrillic"],
// });

interface IconCountProps {
  type: IconProps["type"];
  count?: number;
  width?: string;
  height?: string;
}

export const IconCount: React.FC<IconCountProps> = ({
  type,
  count,
  width,
  height,
}): JSX.Element => {
  const countRef = useRef<HTMLDivElement>(null);
  const widthNumber = Number(width?.replace(/px/gi, ""));
  const [parentWidth, setParentWidth] = useState<number>(0);

  useEffect(() => {
    if (countRef.current?.offsetWidth) {
      setParentWidth(countRef.current.offsetWidth + widthNumber - 13);
    }
  }, [count, widthNumber]);

  return (
    <div
      className={styles.container}
      style={{
        width: count ? `${parentWidth}px` : "auto"
      }}
    >
      <Icon type={type} width={width} height={height} />
      {count && (
        // <div className={`${styles.count} ${nunito.className}`} ref={countRef}>
        <div className={`${styles.count}`} ref={countRef}>
          {count}
        </div>
      )}
    </div>
  );
};

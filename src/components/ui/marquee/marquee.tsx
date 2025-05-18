import styles from "./marquee.module.css";
import { LogoBox } from "../logo-box/logo-box";
import { logoList } from "@/constant/constant";
import { LogoType } from "@/types/types";
import Text from "@/components/atom/text-module/text-module";
import clsx from "clsx";

export default function Marquee({
  direction = "left",
  except = [],
}: {
  direction?: "left" | "right";
  except?: LogoType[];
}) {
  return (
    <div className={styles.marquee_wrapper}>
      <div className={`${styles.marquee} ${styles[direction]}`}>
        {logoList.map((item) => (
          <LogoBox
            except={except}
            name={item.name}
            src={item.src}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
}

interface BlurMarqueeProps {
  exceptSkill?: LogoType[];
  className?: string;
}
export function BlurMarquee({
  exceptSkill = [],
  className = "",
}: BlurMarqueeProps) {
  const execptLogoList = logoList.filter(
    (item) => !exceptSkill.includes(item.name)
  );
  return (
    <div
      className={clsx(
        "bg-c-box-layout-color rounded-c-border-radius  relative group overflow-hidden",
        className
      )}
    >
      <div className="hover:blur-lg transition duration-300">
        <Marquee except={exceptSkill} />
        <Marquee direction="right" except={exceptSkill} />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
        <div className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <div className="text-center text-lg font-semibold text-gray-900 bg-white/80 px-4 py-2 rounded shadow-md">
            {execptLogoList.map((item) => (
              <span key={item.key}>
                <Text.subTitle>- {item.name}</Text.subTitle>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

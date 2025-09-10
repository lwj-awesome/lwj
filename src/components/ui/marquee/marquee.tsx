/* Tailwind version */
import { LogoBox } from "../logo-box/logo-box";
import { logoList } from "@/constant/constant";
import { LogoType } from "@/types/types";
import { Text } from "@/components/ui";
import clsx from "clsx";

export default function Marquee({
  direction = "left",
  except = [],
}: {
  direction?: "left" | "right";
  except?: LogoType[];
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap p-4 relative h-fit w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--tw-mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={clsx(
          "flex flex-row gap-c-gap-xxl text-[3rem] will-change-transform",
          direction === "left"
            ? "[animation:scroll-left_40s_linear_infinite] md:[animation:scroll-left_40s_linear_infinite]"
            : "[animation:scroll-right_40s_linear_infinite] md:[animation:scroll-right_40s_linear_infinite]"
        )}
      >
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
        <div className="hidden lg:block">
          <Marquee direction="right" except={exceptSkill} />
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center ">
        <div className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
          <div className="text-center text-lg font-semibold text-c-foreground bg-c-box-bg-color/80 px-4 py-2  shadow-md">
            {execptLogoList.map((item) => (
              <span key={item.key}>
                <Text.description>- {item.name}</Text.description>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

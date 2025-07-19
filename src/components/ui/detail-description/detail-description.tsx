import Text from "@/components/atom/text-module/text-module";
import { Detail } from "../detail-item/detail-item";
import { ColorDot } from "@/components/atom/color-dot";

interface DetailDescProps {
  title: string;
  content: {
    text: string;
    key: number;
    hilight?: string;
    subTitle?: string;
  }[];
  className?: string;
}
export function DescriptionPart({
  className,
  title,
  content,
}: DetailDescProps) {
  return (
    <Detail className={className}>
      <Detail.title>{title}</Detail.title>
      <Detail.desc>
        {content.map((item) => (
          <div key={item.key}>
            {item.subTitle && (
              <div className="mb-5">
                <Text.subTitle>{item.subTitle}</Text.subTitle>
              </div>
            )}
            <Text.subDesc>
              <ColorDot>{item.hilight}</ColorDot> {item.text}
            </Text.subDesc>
          </div>
        ))}
      </Detail.desc>
    </Detail>
  );
}

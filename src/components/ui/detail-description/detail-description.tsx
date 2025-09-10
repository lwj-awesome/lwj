import Text from "@/components/ui/text-module/text-module";
import { Detail } from "../detail-item/detail-item";
import { ColorDot } from "@/components/ui/color-dot";
import { ContentProps } from "@/types/types";

interface DetailDescProps {
  title: string;
  content: ContentProps[];
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
              <ColorDot>{item.highlight}</ColorDot> {item.text}
            </Text.subDesc>
          </div>
        ))}
      </Detail.desc>
    </Detail>
  );
}

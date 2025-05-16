import { VisibleSectionsProps } from "@/types/types";
import Text from "../text-module/text-module";
import {
  dotStyle,
  pictureImgStyle,
  pictureLayoutStyle,
  textLayoutStyle,
} from "./my-picture-intro.styles";
export default function MyPicture({
  visibleSections,
}: {
  visibleSections?: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["myPicture"] && "visible"}`}
    >
      <div className={pictureLayoutStyle}>
        <div className={textLayoutStyle}>
          <Text.title>
            사용자에게 <span className={dotStyle}> * </span> 가치를 더하고 싶은
          </Text.title>
          <Text.title>
            <span className={dotStyle}> * </span>개발자 이원종입니다
            <span className={dotStyle}> . </span>
          </Text.title>
          <Text.description>
            저는 사용자에게 도움이 되는 개발을 하고 싶습니다. 사람들이 제가 만든
            웹사이트를 쓰면서 즐거워지는게 제 목표입니다
          </Text.description>
          <Text.description>
            이러한 개발자가 되기 위해 프론트엔드 기술 학습에 끊임없이 노력하고
            있어요.
          </Text.description>
        </div>
        <div className={pictureImgStyle}>img</div>
      </div>
    </article>
  );
}

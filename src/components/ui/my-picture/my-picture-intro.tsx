import { VisibleSectionsProps } from "@/types/types";
import Text from "../text-module/text-module";
import { pictureImgStyle, pictureLayoutStyle } from "./my-picture-intro.styles";
export default function MyPicture({
  visibleSections,
}: {
  visibleSections?: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["myPicture"] && "visible"}`}
    >
      <figure className={pictureLayoutStyle}>
        <Text.title>A B C D E F G</Text.title>
        <img src="images/see.jpg" alt="" className={pictureImgStyle} />
      </figure>
    </article>
  );
}

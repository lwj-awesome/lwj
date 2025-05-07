import { VisibleSectionsProps } from "@/types/types";
import Text from "../text-module/text-module";
export default function MyPicture({
  visibleSections,
}: {
  visibleSections?: VisibleSectionsProps[];
}) {
  return (
    <article
      className={`section ${visibleSections?.[0]?.["myPicture"] && "visible"}`}
    >
      <figure className="w-full flex flex-col gap-custom-gap-lg pt-[10rem] items-center">
        <Text.title>A B C D E F G</Text.title>
        <img
          src="images/see.jpg"
          alt=""
          className="sm:w-[40rem] sm:h-[40rem] rounded-custom-border-radius"
        />
      </figure>
    </article>
  );
}

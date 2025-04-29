import { VisibleSectionsProps } from "@/types/types";
import styles from "./my-picture-intro.module.css";
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
      <figure className={styles.main_name}>
        <Text.title>A B C D E F G</Text.title>
        <img src="images/see.jpg" alt="" />
      </figure>
    </article>
  );
}

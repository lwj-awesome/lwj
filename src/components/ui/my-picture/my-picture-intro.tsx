import { VisibleSectionsProps } from "@/types/types";
import styles from "./my-picture-intro.module.css";
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
        <span>hello i am alon portoz</span>
        <h1>A B C D E F G</h1>
        <img src="images/see.jpg" alt="" />
      </figure>
    </article>
  );
}

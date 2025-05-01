import Text from "@/components/ui/text-module/text-module";
import styles from "./page.module.css";
import Marquee from "@/components/ui/marquee/marquee";

export default function Page() {
  return (
    <>
      <div className={styles.detail_layout}>
        <Text.title>A B C D E</Text.title>
        <article className={styles.detail_main_article}>
          <img
            className={styles.detail_main_image}
            src="images/see.jpg"
            alt=""
          />
          <div className={styles.detail_main_content}>
            <Text.subTitle>Introduction to UI/UX</Text.subTitle>
            <Text.description>
              Mastering UI/UX Design for Websites: Key Principles and Best
              Practices
            </Text.description>
            <Text.description>
              User Interface (UI) and User Experience (UX) are two fundamental
              aspects of website design that work together to create an
              enjoyable, intuitive experience for users. While UI focuses on the
              layout, visual design, and interaction elements of a website, UX
              focuses on how the overall experience feels—ensuring users can
              navigate and interact with ease. User Interface (UI) and User
              Experience (UX) are two fundamental aspects of website design that
              work together to create an enjoyable, intuitive experience for
              users. While UI focuses on the layout, visual design, and
              interaction elements of a website, UX focuses on how the overall
              experience feels—ensuring users can navigate and interact with
              ease.
            </Text.description>
          </div>
        </article>
        <Marquee />
        <Marquee direction="right" />
        <article></article>

        <article className={styles.detail_main_article}>
          <div className={styles.detail_main_content}>
            <Text.subTitle>Introduction to UI/UX</Text.subTitle>
            <Text.description>
              Mastering UI/UX Design for Websites: Key Principles and Best
              Practices
            </Text.description>
            <Text.description>
              User Interface (UI) and User Experience (UX) are two fundamental
              aspects of website design that work together to create an
              enjoyable, intuitive experience for users. While UI focuses on the
              layout, visual design, and interaction elements of a website, UX
              focuses on how the overall experience feels—ensuring users can
              navigate and interact with ease. User Interface (UI) and User
              Experience (UX) are two fundamental aspects of website design that
              work together to create an enjoyable, intuitive experience for
              users. While UI focuses on the layout, visual design, and
              interaction elements of a website, UX focuses on how the overall
              experience feels—ensuring users can navigate and interact with
              ease.
            </Text.description>
          </div>
          <img
            className={styles.detail_main_image}
            src="images/see.jpg"
            alt=""
          />
        </article>
      </div>
    </>
  );
}

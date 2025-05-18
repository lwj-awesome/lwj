import Text from "@/components/atom/text-module/text-module";
import Marquee from "@/components/ui/marquee/marquee";

export default function Page() {
  const commonImageStyle =
    "rounded-custom-image-radius sm:h-[30rem] sm:w-[30rem] h-[20rem] w-full";
  const commonContentStyle = "flex flex-col gap-custom-gap-lg px-[2rem] w-full";
  return (
    <>
      <div className="sm:p-[10rem] p-[1.2rem] animate-fadeUp w-full">
        <Text.title>A B C D E</Text.title>
        <article className="sm:flex sm:flex-row  gap-custom-gap-md flex flex-col">
          <img className={commonImageStyle} src="images/see.jpg" alt="" />
          <div className={commonContentStyle}>
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

        <article className="sm:flex sm:flex-row gap-[1.2rem] sm:mt-[4rem] flex flex-col-reverse ">
          <div className={commonContentStyle}>
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
          <img className={commonImageStyle} src="images/see.jpg" alt="" />
        </article>
      </div>
    </>
  );
}

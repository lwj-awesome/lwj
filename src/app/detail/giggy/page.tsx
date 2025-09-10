import { BlurMarquee } from "@/components/ui/marquee/marquee";
import { Detail, ImageSection } from "@/components/ui";
import { LogoType } from "@/types/types";
import { DescriptionPart } from "@/components/ui/detail-description/detail-description";
import { LEARN, MAIN, MATCHING, PROFILE, REGIST } from "@/content/detail/giggy";

export default function Page() {
  const exceptSkill: LogoType[] = ["MFA", "React-query", "Recoil"];
  const mainImage = ["/images/giggy/main.png"];
  const registImages = [
    "/images/giggy/regist-1.png",
    "/images/giggy/regist-2.png",
  ];
  const profileImage = ["/images/giggy/profile.png"];
  const matchingImages = [
    "/images/giggy/matching.png",
    "/images/giggy/chat-1.png",
  ];
  return (
    <main>
      <Detail>
        <Detail.title>Giggy project</Detail.title>
      </Detail>
      <ImageSection images={mainImage} />
      <DescriptionPart title="" content={MAIN} />

      <ImageSection images={registImages} />
      <DescriptionPart title="" content={REGIST} />

      <ImageSection images={profileImage} />
      <DescriptionPart title="" content={PROFILE} />

      <ImageSection images={matchingImages} />
      <DescriptionPart title="" content={MATCHING} />

      <DescriptionPart title="Learn" content={LEARN} />
      <BlurMarquee exceptSkill={exceptSkill} />
    </main>
  );
}

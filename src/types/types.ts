export interface VisibleSectionsProps {
  [id: string]: {
    progress: number;
    sectionHeight: number;
    scrollPosition: number;
  };
}

export interface CommonComponentsProps {
  children: React.ReactNode;
}

export type LogoType =
  | "React"
  | "Javascript"
  | "Typescript"
  | "Recoil"
  | "React-query"
  | "MFA"
  | "Next.js"
  | "Tailwind Css";

export interface LogoListProps {
  key: number;
  name: LogoType;
  src: string;
}

export interface ContentProps {
  text: string;
  key: number;
  highlight?: string;
  subTitle?: string;
}

export interface NestingContentProps {
  key: number;
  mainTitle: string;
  content: ContentProps[];
}

export interface ImageDataProps {
  src: string;
  width?: number;
  className?: string;
  alt?: string;
}

export interface DetailSectionProps {
  key: number;
  title: string;
  data: NestingContentProps[];
  images: ImageDataProps[];
}

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

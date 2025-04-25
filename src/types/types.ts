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

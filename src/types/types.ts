export interface VisibleSectionsProps {
  [id: string]: {
    progress: number;
    sectionHeight: number;
    scrollPosition: number;
  };
}

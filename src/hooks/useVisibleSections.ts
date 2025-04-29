import { useEffect, useState } from "react";
import { VisibleSectionsProps } from "@/types/types";

export function useVisibleSections(
  sectionRefs: { ref: React.RefObject<HTMLDivElement | null>; id: string }[]
) {
  const [visibleSections, setVisibleSections] =
    useState<VisibleSectionsProps[]>();

  useEffect(() => {
    const handleScroll = () => {
      const visibleSections = sectionRefs
        .map(({ ref, id }) => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return null;
          if (rect.top >= 0 || rect.bottom <= 0) return null;

          const sectionHeight = rect.bottom - rect.top;
          const scrollPosition = Math.min(
            Math.max(-rect.top, 0),
            sectionHeight
          );

          return {
            [id]: {
              sectionHeight,
              scrollPosition,
              progress: scrollPosition / sectionHeight,
            },
          };
        })
        .filter(Boolean);

      setVisibleSections(visibleSections as VisibleSectionsProps[]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return visibleSections;
}

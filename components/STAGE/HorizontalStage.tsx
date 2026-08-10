"use client";

import {
  Children,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface HorizontalStageProps {
  children: ReactNode;
  onActivePanelChange?: (panelId: string) => void;
}

export default function HorizontalStage({
  children,
  onActivePanelChange,
}: HorizontalStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || !onActivePanelChange) {
      return;
    }

    const panels = Array.from(stage.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    if (panels.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visiblePanel = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (visiblePanel) {
          const panelId = (visiblePanel.target as HTMLElement).id;

          if (panelId) {
            onActivePanelChange(panelId);
          }
        }
      },
      {
        root: stage,
        threshold: [0.5, 0.75, 0.9],
      },
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      observer.disconnect();
    };
  }, [onActivePanelChange]);

  return (
    <main
      ref={stageRef}
      className="no-scrollbar flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
    >
      {Children.map(children, (child) => child)}
    </main>
  );
}
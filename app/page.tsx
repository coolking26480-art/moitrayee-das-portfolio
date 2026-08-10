"use client";

import { useState } from "react";

import Navigation from "../components/Navigation";
import HorizontalStage from "../components/STAGE/HorizontalStage";
import Panel from "../components/ui/Panel";
import HomePanel from "../components/panels/HomePanel";
import AcademicQualificationsPanel from "../components/panels/AcademicQualificationsPanel";
import PublicationsPanel from "../components/panels/PublicationsPanel";
import ConferencesPanel from "../components/panels/ConferencesPanel";
import WorkExperiencePanel from "../components/panels/WorkExperiencePanel";
import AwardsPanel from "../components/panels/AwardsPanel";
import InvitedTalksPanel from "../components/panels/InvitedTalksPanel";

export default function Home() {
  const [activePanel, setActivePanel] = useState("home");

  const handleNavigation = (target: string) => {
    const element = document.getElementById(target);

    if (!element) {
      return;
    }

    element.scrollTop = 0;

    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    window.setTimeout(() => {
      element.scrollTop = 0;
    }, 350);

    setActivePanel(target);
  };

  const handleContact = () => {
    const homePanel = document.getElementById("home");

    if (!homePanel) {
      return;
    }

    /*
     * If we are not currently on Home,
     * move horizontally to Home first.
     */
    if (activePanel !== "home") {
      homePanel.scrollTop = 0;

      homePanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      setActivePanel("home");

      /*
       * Wait for the horizontal movement to finish,
       * then move to the footer.
       */
      window.setTimeout(() => {
        const footer = document.getElementById("home-footer");

        if (footer) {
          footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);

      return;
    }

    /*
     * Already on Home.
     * Simply scroll to the footer.
     */
    const footer = document.getElementById("home-footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navigation
        activePanel={activePanel}
        onNavigate={handleNavigation}
        onContact={handleContact}
      />

      <HorizontalStage onActivePanelChange={setActivePanel}>
        <Panel id="home">
          <HomePanel onNavigate={handleNavigation}/>
        </Panel>
        
        <Panel id="qualifications">
          <AcademicQualificationsPanel />
        </Panel>

        <Panel id="work">
          <WorkExperiencePanel />
        </Panel>

        <Panel id="publications">
          <PublicationsPanel />
        </Panel>

        <Panel id="conferences">
          <ConferencesPanel />
        </Panel>

        <Panel id="awards">
        <AwardsPanel />
        </Panel>

        <Panel id="invited-talks">
         <InvitedTalksPanel />
         </Panel>
      </HorizontalStage>
    </>
  );
}
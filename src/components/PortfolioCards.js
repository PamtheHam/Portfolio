import React from "react";
import NoteTakerCard from "./projects/NoteTakerCard";
import SkyGazerCard from "./projects/SkyGazerCard";
import PFFCard from "./projects/PFFCard";
import ReadMeGeneratorCard from "./projects/ReadMeGeneratorCard";
import WorkDaySchedulerCard from "./projects/WorkDaySchedulerCard";
import ReactTaskTrackerCard from "./projects/ReactTaskTrackerCard";

const PortfolioCards = () => {
  return (
    <div>
      <ReactTaskTrackerCard />
      <PFFCard />
      <SkyGazerCard />
      <NoteTakerCard />
      <ReadMeGeneratorCard />
      <WorkDaySchedulerCard />
    </div>
  );
};

export default PortfolioCards;

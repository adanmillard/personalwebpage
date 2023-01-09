import * as React from "react";
import { JobsCard } from "../Components/Jobs/JobsCard";
import { WorkDescription } from "../Components/WorkDescription/WorkDescription";

export const WorkExperience: React.FC = () => {
  return (
    <div>
      <WorkDescription />
      <JobsCard />
    </div>
  );
};

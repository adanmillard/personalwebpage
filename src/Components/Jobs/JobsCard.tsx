import axios from "axios";
import { useEffect, useState } from "react";
import "./jobscard.css";

interface Ijobs {
  data: {
    jobID: number;
    company: string;
    jobTitle: String;
    start_date: Date;
    end_date: string;
    description: string;
  };
}

export const JobsCard: React.FC = () => {
  const jobsAPI = process.env.REACT_APP_API_WORK;
  const [apiData, setApiData] = useState<Ijobs[]>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getJobs = () => {
    axios
      .get(`${jobsAPI}/WorkExperience`)
      .then((response: any) => {
        setApiData(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <div className="jobs-card-container">
      {apiData &&
        apiData.map((job: any, i: number) => {
          return (
            <div className="jobs-information" key={i}>
              <p>Job Title: {job.jobTitle}</p>
              <p>Company: {job.company}</p>
              <p>Starting Date: {job.start_date}</p>
              <p>Finishing Date: {job.end_date}</p>
              <p>Job Description: {job.description}</p>
            </div>
          );
        })}
    </div>
  );
};

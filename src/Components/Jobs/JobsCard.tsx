import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();

  const prevPage = () => {
    navigate("/aboutme");
  };

  const nextPage = () => {
    navigate("/projects");
  };

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
    <div className="jobs-card-main-container">
      <span onClick={prevPage} className="prev-btn">
        ❰
      </span>
      <div className="jobs-card-container">
        {apiData &&
          apiData.map((job: any, i: number) => {
            return (
              <div className="jobs-information" key={i}>
                <div className="company-and-title">
                  <div>
                    <p>
                      <b>Company:</b>
                    </p>
                    <p>{job.company}</p>
                  </div>
                  <div>
                    <p>
                      <b>Job Title:</b>
                    </p>
                    <p>{job.jobTitle}</p>
                  </div>
                </div>
                <div className="start-finish">
                  <div>
                    <p>
                      <b>Starting Date & Finishing Date:</b>
                    </p>
                    <p>
                      {job.start_date} to {job.end_date}
                    </p>
                  </div>
                </div>
                <div className="description">
                  <p>
                    <b>Job Description:</b>
                  </p>
                  <p>{job.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      <span onClick={nextPage} className="next-btn">
        ❱
      </span>
    </div>
  );
};

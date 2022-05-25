import { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
function App() {
  const url = 'https://course-api.com/react-tabs-project';
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const getJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    getJobs();
  }, []);
  if (loading) {
    return <div className="section loading">Loading...</div>;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                className={`job-btn ${value === index && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h4>{title}</h4>
          <h3>{company}</h3>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
        <button className="btn" type="button">
          info
        </button>
      </div>
    </section>
  );
}

export default App;

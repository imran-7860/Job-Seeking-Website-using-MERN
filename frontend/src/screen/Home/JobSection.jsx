import React from 'react';
import { jobsData } from '../../constant';
import { useNavigate } from 'react-router-dom';



const JobCard = ({ job }) => {
  const history = useNavigate();
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 border border-gray-300 ">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="mt-2 text-xl font-semibold text-gray-800">{job.salary}</p>
        <p className="mt-1 text-gray-600">{job.jobType}</p>
        <div className="flex items-center  gap-2">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Apply now</button>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={()=>history(`/jobDetails/${job.id}`)}>Explore now</button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Job details</h3>
          <ul className="list-disc list-inside text-gray-600">
            {job.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const JobSection = () => {
  return (
    <div className="bg-white ">
    <div className="container mx-auto grid lg:grid-cols-3 py-10 gap-3  ">
      {jobsData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
    </div>
  );
};


export default JobSection;

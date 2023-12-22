import React, { useEffect, useState } from 'react'
import Job from './Job';
import { BiLoader } from "react-icons/bi";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobsLength, setJobsLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='my-32 '>
            <div className="text-center">
                <h2 className='text-3xl font-semibold'>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='my-10 grid md:grid-cols-2 grid-cols-1 justify-items-center gap-10'>
                {
                    jobs.slice(0,jobsLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
           <div className="flex justify-center items-center">
           <button onClick={()=>setJobsLength(jobs.length)}
           className={`py-2 mt-3 px-10 border-2 rounded  border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold ${jobsLength === jobs.length ? 'hidden' : ''}`}>
            Load More <BiLoader className='inline'/>
            </button>
           </div>
        </div>
    )
}

export default Jobs

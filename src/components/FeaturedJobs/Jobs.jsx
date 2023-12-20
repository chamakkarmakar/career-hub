import React, { useEffect, useState } from 'react'
import Job from './Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

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
                    jobs.slice(0,4).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    )
}

export default Jobs

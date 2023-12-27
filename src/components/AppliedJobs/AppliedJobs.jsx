import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../../Utility/localStorage';
import JobApplied from './JobApplied';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = e => {
        const filter = e.target.value;
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        // if (jobs.length > 0) {
        const jobsApplied = [];
        for (const id of storedJobIds) {
            const job = jobs.find(job => job.id === id);

            // if (job) {
            jobsApplied.push(job)
            // }
        }

        setAppliedJobs(jobsApplied);
        setDisplayJobs(jobsApplied);
        // }
    }, [jobs])

    return (
        <div className='mb-10'>
            <div className='bg-no-repeat bg-cover py-12 px-10 ' style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/girl-write-open-white-book-accounting-minimal-clean-light-blue-desk-with-laptop-accessories-copy-space-flat-lay-top-view-mock-up_315337-7591.jpg?size=626&ext=jpg&ga=GA1.1.712245223.1703052857&semt=ais")` }}>
                <h2 className="text-center text-3xl text-purple-950 font-bold">Applied Job</h2>
            </div>
            <div className='md:w-3/5 w-3/4 mx-auto my-10'>
                <div className='flex justify-end items-center my-5'>
                    <select className='bg-slate-100 px-5 py-1.5 outline-none' onChange={handleJobsFilter}>
                        <option value="" selected disabled hidden>Filter</option>
                        <option value="all">All</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                    </select>
                </div>
                <div className='grid gap-10'>
                    {
                        displayJobs.map(job => <JobApplied key={job.id} job={job} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AppliedJobs

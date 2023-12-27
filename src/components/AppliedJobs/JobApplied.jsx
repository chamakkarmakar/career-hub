import React from 'react'
import { Link } from 'react-router-dom'
import money from '../../assets/icons/money.png'
import location from '../../assets/icons/Location.png'

const JobApplied = ({ job }) => {

    return (
        <div className='w-full md:h-32 p-2 border border-gray-900 flex md:flex-row flex-col items-center justify-between'>
            <div className='flex md:flex-row flex-col'>
                <img src={job.logo} alt="" className='h-24 w-36 md:mx-0 mx-auto' />
                <div className='md:ms-5'>
                    <h2 className='text-lg font-bold'>{job.job_title}</h2>
                    <p className='text-gray-600 text-lg font-semibold'>{job.company_name}</p>
                    <div className='md:my-1 my-2'>
                        <span className='me-5 text-purple-600 rounded font-semibold border border-purple-600 py-1 px-3'>{job.remote_or_onsite}</span>
                        <span className='me-5 text-purple-600 rounded font-semibold border border-purple-600 py-1 px-3'>{job.job_type}</span>
                    </div>
                    <div>
                        <img src={location} alt="location" className='inline w-5 h-5 me-2' />
                        <span className='me-10'>{job.location}</span>
                        <img src={money} alt="money" className='inline w-5 h-5 me-2' />
                        <span>{job.salary}</span>
                    </div>
                </div>
            </div>
            <Link to={`/job/${job.id}`} className='md:mt-0 mt-5'>
                <button className='py-2 px-5 border-2 rounded border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold '>View Details</button>
            </Link>
        </div>
    )
}

export default JobApplied

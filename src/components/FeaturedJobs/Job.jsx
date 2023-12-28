import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
const Job = ({ job }) => {
    return (
        <div className='w-3/4 shadow-2xl'>
            <img src={job.logo} alt={job.company_name} className='h-32' />
            <div className='md:px-10 px-4 py-5'>
                <h2 className='text-lg font-bold'>{job.job_title}</h2>
                <p className='text-gray-600 text-lg font-semibold'>{job.company_name}</p>
                <div className='my-3'>
                    <span className='me-5 text-purple-600 rounded font-semibold border border-purple-600 py-1 px-3'>{job.remote_or_onsite}</span>
                    <span className='text-purple-600 rounded font-semibold border border-purple-600 py-1 px-3'>{job.job_type}</span>
                </div>
                <div className='md:w-3/4 flex md:flex-row flex-col justify-between md:items-center'>
                    <p>
                        <IoLocationOutline className='inline w-5 h-5 me-2 text-purple-900' />
                        <span className=''>{job.location}</span>
                    </p>
                    <p>
                        <RiMoneyDollarCircleLine className='inline w-5 h-5 me-2 text-purple-900' />
                        <span>{job.salary}</span>
                    </p>
                </div>
                <Link to={`/job/${job.id}`}>
                    <button className='py-2 mt-3 px-5 border-2 rounded border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold '>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Job

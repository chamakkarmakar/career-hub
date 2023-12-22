import React from 'react'
import jobCategoryBg from "../../assets/images/job-category-bg-2.jpg"
import { useLoaderData, useParams } from 'react-router-dom'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id === parseInt(id))
    console.log(job);
    return (
        <div className='mb-10'>
            <div className='bg-no-repeat bg-cover py-12 px-10 ' style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/girl-write-open-white-book-accounting-minimal-clean-light-blue-desk-with-laptop-accessories-copy-space-flat-lay-top-view-mock-up_315337-7591.jpg?size=626&ext=jpg&ga=GA1.1.712245223.1703052857&semt=ais")` }}>

                <div className='flex md:flex-row flex-col md:justify-around justify-center md:items-start items-center md:w-1/2'>
                    <img src={job.logo} alt={job.company_name} className='h-32 mb-5' />
                    <div>
                        <h2 className='text-purple-900 mb-5 font-bold text-3xl'>{job.job_title}</h2>
                        <div className='flex md:flex-row flex-col justify-between items-center mb-3'>
                            <p><FaLocationDot className='text-purple-950 inline w-5 h-5' /><span className='font-semibold'> {job.location}</span></p>
                            <p><RiMoneyDollarCircleFill className='text-purple-950 inline w-6 h-6' /><span className='font-semibold'> {job.salary}</span></p>
                        </div>
                        <p className='md:text-justify text-center'><SlCalender className='text-purple-950 inline w-4 h-4' /><span className='font-semibold'> Last Date 1st January, 2024</span></p>
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center p-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${jobCategoryBg})` }}>
                <div className='md:w-8/12'>
                    <p className='mb-10'><span className='font-bold'>Job Description:</span> {job.job_description}</p>
                    <p className='mb-10'><span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className='mb-10'><span className='font-bold'>Educational Requirements:</span> {job.educational_requirements}</p>
                    <p className='mb-10'><span className='font-bold'>Experiences:</span> {job.experiences}</p>
                </div>
                <div className='bg-purple-100 p-5 md:w-3/12 h-4/6'>
                    <h3 className='text-lg font-bold text-center'>Job Details</h3>
                    <hr />
                    <div className='my-5'>
                        <h3><span className='font-bold'>Job Title:</span> {job.job_title} </h3>
                        <h5><span className='font-bold'>Salary:</span> {job.salary} </h5>
                        <p><span className='font-bold'>Job Type:</span> {job.job_type}, {job.remote_or_onsite} </p>
                    </div>
                    <h3 className='text-lg font-bold text-center'>Contact Information</h3>
                    <hr />
                    <div className="my-5">
                        <p><span className='font-bold'>Phone:</span> {job.contact_information.phone} </p>
                        <p><span className='font-bold'>Email:</span> {job.contact_information.email} </p>
                        <p><span className='font-bold'>Address:</span> {job.contact_information.address} </p>
                    </div>
                    <button className='py-3 px-5 border-2 rounded w-full border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default JobDetails

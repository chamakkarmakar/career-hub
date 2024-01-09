import React from 'react'
import Banner from '../Banner/Banner'
import JobCategory from '../JobCategory/JobCategory'
import Jobs from '../FeaturedJobs/Jobs'
import Blogs from '../CareerBlogs/Blogs'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


const Home = () => {
  return (
    <div>
        <Banner />
        <JobCategory />
        <Jobs />
        <Blogs />
    
    </div>
  )
}

export default Home

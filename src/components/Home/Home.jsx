import React from 'react'
import Banner from '../Banner/Banner'
import JobCategory from '../JobCategory/JobCategory'
import Jobs from '../FeaturedJobs/Jobs'
import Blogs from '../CareerBlogs/Blogs'
import Contact from '../Contact/Contact'


const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategory />
      <Jobs />
      <Blogs />
      <Contact />
    </div>
  )
}

export default Home

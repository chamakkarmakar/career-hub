import React, { useEffect, useState } from 'react'
import jobCategoryBg from "../../assets/images/job-category-bg.jpg"
import Category from './Category';
const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='py-20 px-auto bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${jobCategoryBg})` }}>
            <div className="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5">
                {
                    categories.map(category => <Category
                    key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    )
}

export default JobCategory

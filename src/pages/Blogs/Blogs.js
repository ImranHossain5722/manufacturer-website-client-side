import React, { useEffect, useState } from 'react';
import Blog from '../../Components/BlogsComponents/Blog';

const Blogs = () => {
const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
    return (
        <div>
             <h1 className='text-4xl text-center font-bold mt-11'> Our Blogs </h1>
            <div class="divider w-10 h-1 mx-auto bg-primary"></div> 

            <div className='grid grid-cols-1 lg:grid-cols-3 px-12' >
                {
                    blogs.map( blogItems => <Blog key={blogItems._id} blogItems={blogItems} ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;
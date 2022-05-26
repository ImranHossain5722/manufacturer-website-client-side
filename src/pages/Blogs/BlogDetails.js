import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  useEffect(() => {
    fetch(`https://warm-journey-62382.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [id]);
  return (
    <div>
      <div class="card w-full h-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={singleBlog.img}
            alt="blogDetails"
            className="rounded-xl w-90"
          />
        </figure>
        <div class="card-body items-center text-center px-80">
          <h2 class="card-title">{singleBlog.title}</h2>
          <p className=" text-justify">{singleBlog.blog}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

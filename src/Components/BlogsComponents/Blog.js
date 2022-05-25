import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({blogItems}) => {

  const { title, blog, admin, img, _id } = blogItems;
  const navigate = useNavigate();
  return (
    <div>
      <div class="card card-compact w-80 h-90 bg-base-100 shadow-xl mb-8">
        <figure>
          <img className="h-45 w-85"
            src={img}
            alt="blog"
          />
        </figure>
        <div class="card-body">

          <h5 class=" font-semibold text-primary text-sm">{title}</h5>
          <p>Author: {admin}</p>
          <p>{blog.length<400?blog.length:blog.slice(0,300)}</p>
          <button class="btn btn-link">Red More</button>
          <div class="card-actions justify-end">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

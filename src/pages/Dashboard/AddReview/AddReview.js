import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from '../../../Shared/Loading/Loading'

const AddReview = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const { data:userFeedBack , isLoading } = useQuery("userFeedBack", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
      );
      const ReviewImagesStorageKey = "a60adc861a41403d1c4df1acbdd1db7e";

      const onSubmit = async (data) => {
        const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image)
      const url = `https://api.imgbb.com/1/upload?key=${ReviewImagesStorageKey}`;
      fetch( url,{
          method:'POST',
          body: formData,
      })
      .then((res)=>res.json())
      .then((result) =>{
         if(result.success){
            const img = result.data.url
            const reviews ={
                name:data.name,
                review:data.review,
                 img:img
            }

            // send data base
            fetch('http://localhost:5000/reviews',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(reviews)
            })
            .then(res=> res.json())
            .then(inserted=>{
              if(inserted.insertedId){
                toast.success('Your review successfully ')
                reset()
              }
              else{
                toast.error('Failed to add your review')
              }
                
            })

         }   



      })
  
        };

    return (
        <div className='grid justify-items-center mb-3'>


            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* for Name field */}
              
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("name", {
                  required: {
                    value: true,
                    message: " Your Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.pName?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.name.message}
                  </span>
                )}
              </label>

              {/* for review */}
              
              <input
                type="text"
                placeholder="Your feedback "
                className="input input-bordered w-full max-w-xs text-black"
                {...register("review", {
                  required: {
                    value: true,
                    message: " Your feedback is Required",
                  },
                })}
              />
              <label className="label">
                {errors.review?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.review.message}
                  </span>
                )}
              </label>
              

              {/* user image */}
            
              <input
                type="file"
                placeholder="Your image"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.file?.type === "required" && (
                  <span className="label-text-alt text-red-400">
                    {errors.file.message}
                  </span>
                )}
              </label>

        
              
            </div>
            <input
              className="btn btn-outline w-full max-w-xs "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
    );
};

export default AddReview;
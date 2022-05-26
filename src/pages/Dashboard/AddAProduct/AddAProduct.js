import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";
const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: addItems, isLoading } = useQuery("addItems", () =>
    fetch("https://warm-journey-62382.herokuapp.com/manufacturerItems").then(
      (res) => res.json()
    )
  );
  const imagesStorageKey = "a60adc861a41403d1c4df1acbdd1db7e";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagesStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const manufacturerItems = {
            name: data.name,
            price: data.price,
            description: data.description,
            minimumOrder: data.minimumOrder,
            availableQuantity: data.availableQuantity,
            img: img,
          };
          // send server
          fetch("https://warm-journey-62382.herokuapp.com/manufacturerItems", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(manufacturerItems),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("successfully add product");
                reset();
              } else {
                toast.error("failed to add product");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid justify-items-center mb-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          {/* for Name field */}
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full max-w-xs text-black"
            {...register("pName", {
              required: {
                value: true,
                message: " Product Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.pName?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.pName.message}
              </span>
            )}
          </label>
          {/*  price field*/}
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Price"
            className="input input-bordered w-full max-w-xs text-black"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.price.message}
              </span>
            )}
          </label>

          {/* description */}
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Short description "
            className="input input-bordered w-full max-w-xs text-black"
            {...register("description", {
              required: {
                value: true,
                message: "description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.description.message}
              </span>
            )}
          </label>
          {/* Minimum order quantity*/}
          <label className="label">
            <span className="label-text">Minimum order quantity </span>
          </label>
          <input
            type="text"
            placeholder="Minimum order quantity"
            className="input input-bordered w-full max-w-xs text-black"
            {...register("minimumOrder", {
              required: {
                value: true,
                message: "Minimum order quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimumOrder?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.minimumOrder.message}
              </span>
            )}
          </label>
          {/* products  Available Quantity*/}

          <label className="label">
            <span className="label-text">Products Available Quantity</span>
          </label>
          <input
            type="text"
            placeholder="Products Available Quantity"
            className="input input-bordered w-full max-w-xs text-black"
            {...register("availableQuantity", {
              required: {
                value: true,
                message: "Products Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.availableQuantity?.type === "required" && (
              <span className="label-text-alt text-red-400">
                {errors.availableQuantity.message}
              </span>
            )}
          </label>
          {/* Product image */}
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            placeholder="Product image"
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
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddAProduct;

import axios, { Axios } from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,

  } = useForm();

  const onSubmit = async(data) => {
    const userinfo = {
      name:data.name,
      email:data.email,
      message:data.message
    }
    try {
     await axios.post("https://getform.io/f/paqgvzxa",userinfo  );
     toast.success("your message has been send")
     reset(); // Reset the form fields

    } catch (error) {
      toast.error("error");
    }
  }

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-3 text-teal-300">Contact me</h1>
      <span>Please fill out the form below o contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/paqgvzxa"
          // method="POST"
          className="bg-slate-200 w-full max-w-lg px-8 py-6 rounded-xl"
          >
          <h1 className="text-xl font-semibold mb-4">Send your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">FullName</label>
            <input
             {...register("name", { required: true })} 
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tinght focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your FullName"
            />
                  {errors.exampleRequired && <span>This field is required</span>}

          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
             {...register("email", { required: true })} 
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tinght focus:shadow-outline"
              type="email"
              id="name"
              name="email"
              placeholder="Enter Your Email Address"
            />
                  {errors.exampleRequired && <span>This field is required</span>}

          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
             {...register("message", { required: true })} 
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tinght focus:shadow-outline"
              type="text"
              id="name"
              name="message"
              placeholder="Type your message here"
            />
                  {errors.exampleRequired && <span>This field is required</span>}

          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

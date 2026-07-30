import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    await axios
      .post("/api/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("User created successfully ! You can login now.");
        }

        localStorage.setItem("messengerUser", JSON.stringify(res.data));
        setAuthUser(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          toast.error("Err:" + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-gray-200 rounded-lg shadow-lg bg-[#15202b] p-10 w-full max-w-md"
        >
          <h1 className="text-3xl text-blue-600 font-bold">Messenger</h1>
          <h1 className=" items-center text-white text-3xl  my-1 ">
            Create a new{" "}
            <span className="text-blue-600 font-semibold ">Account</span>
          </h1>
          <div className="flex flex-col gap-6 items-center justify-center w-full my-10">
            {/*username*/}
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="input"
                required
                placeholder="Username"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && <span>This field is required</span>}
            {/*email*/}
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && <span>This field is required</span>}
            {/*password*/}
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && <span>This field is required</span>}
            {/*confirm password*/}
            <label className="input w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder=" Confirm Password"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("confirmPassword", {
                  required: true,
                })}
              />
            </label>
            {errors.confirmPassword && <span> all fields are mendatory</span>}
            {/*submit*/}

            <button
              type="submit"
              value="Signup"
              className="bg-[#1d9bf0] cursor-pointer text-white font-bold py-2 px-4 rounded-full w-full hover:bg-[#1a8cd8] transition duration-200 ease-in-out"
            >
              SignUp
            </button>
            <p>
              {" "}
              Have an Account ?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 font-semibold underline cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;

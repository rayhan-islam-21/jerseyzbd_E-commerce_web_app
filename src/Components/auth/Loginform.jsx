"use client";

import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "@/context/authcontext/Authcontext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const { signInWithGoogle, signInWithEmail, signInWithFacebook } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      signInWithEmail(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log("User logged in:", loggedUser);
          router.push("/");
          toast.success("Logged in successfully!");
        })
        .catch((err) => {
          console.error("Error logging in:", err);
          setError(err.message);
          toast.error(err.message);
        });
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed");
      toast.error(err.message || "Login failed");
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Google login successful!");
      console.log(result.user);
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Google login failed");
    }
  };

  const facebookLogin = async () => {
    try {
      const result = await signInWithFacebook();
      toast.success("Facebook login successful!");
      console.log(result.user);
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Facebook login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:min-w-md mx-auto p-6 rounded-lg bg-white "
    >
      <Toaster position="top-center" />
      <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-2 text-start">
        Login
      </h2>
      <p className="my-3 text-sm md:text-lg text-gray-500">
        Don’t have an account?{" "}
        <Link href="/auth/signup" className="underline underline-offset-1">
          Sign up
        </Link>
      </p>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="mb-4">
        <label className="block mb-1 text-gray-500">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-500">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <div className="mt-1 text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        {isSubmitting ? "Logging In..." : "Login"}
      </button>

      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={facebookLogin}
          type="button"
          className="w-full flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition"
        >
          <FaFacebook className="mr-2 text-blue-600" /> Continue with Facebook
        </button>
        <button
          onClick={googleLogin}
          type="button"
          className="w-full flex items-center justify-center border py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} className="mr-2" /> Continue with Google
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

"use client";

import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [state, handleSubmit] = useForm("mleqdlqz"); // Replace with your Formspree form ID
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <p className="text-6xl font-bold text-white">Thanks for joining!</p>
      </div>
    );
}
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-t from-red-500 to-red-800">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-white">
            Zingify is coming soon!
          </h1>

          <p className="mt-3 text-2xl text-white">
            Get ready for a new era of dining discovery experience
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex items-center">
            <div className="flex flex-wrap items-center md:flex-nowrap">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="p-2 mr-2 border rounded-md md:w-auto focus:outline-none text-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t bg-slate-300">
          <a
            className="flex items-center justify-center text-gray-700"
            href="https://zingify.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/zingify.png" alt="Zingify Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </>
  );
}

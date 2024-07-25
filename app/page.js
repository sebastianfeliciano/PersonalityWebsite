"use client";
import React from "react";
import Navbar from "./Components/navbar";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleRedirectSignup = () => {
    router.push("/signup");
  };

  const handleRedirectSignIn = () => {
    router.push("/signin");
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen">
        <Grid
          spacing={10}
          container
          className="h-full w-full flex justify-center items-center"
        >
          <Grid item xs={4}>
            <Stack
              spacing={3}
              textAlign="center"
              className="flex justify-center items-center"
            >
              <h2>
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Mingle
                </span>
              </h2>
              <p>
  Create an account and take our personality test to discover your perfect match. 
  <br />
  Share your hobbies and interests to connect with like-minded individuals.
  
</p>
              <button
                onClick={handleRedirectSignup}
                className="btn bg-indigo-800 text-white w-10/12"
              >
                Continue with email
              </button>
              <Grid container className="flex justify-center items-center">
                <Grid item xs={4.5}>
                  <div className="w-full h-0.5 bg-black"></div>
                </Grid>
                <Grid item xs={1}>
                  <p>or</p>
                </Grid>
                <Grid item xs={4.5}>
                  <div className="w-full h-0.5 bg-black"></div>
                </Grid>
              </Grid>

              <button
                onClick={handleRedirectSignIn}
                className="bg-gray-600 text-white btn w-10/12"
              >
                Manually login
              </button>

              <p>
                By creating an account you agree with our Term of Service,
                Privacy, Policy, and our default notification
              </p>

              <p>Already have an account? <u onClick={handleRedirectSignIn}>Sign In</u></p>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <img src="https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-boy-and-girl-in-relationship-with-simple-art-style-have-a-png-image_2635928.jpg" className="w-full h-full" alt=""></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;

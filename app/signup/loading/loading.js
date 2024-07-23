'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoadingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signup/profile/page'); // Navigate to the profile page or any other page
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [router]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <iframe
          src="https://giphy.com/embed/wnYB3vx9t6PXiq1ubB"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed mb-4"
          allowFullScreen
        ></iframe>
        <p className="text-xl">Looking for matches...</p>
      </div>
    </div>
  );
};

export default LoadingPage;

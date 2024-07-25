'use client';

import React, { useEffect, useState } from 'react';
import supabase from '@/app/api/api';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signOff = async () => {
      router.push('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        if (data.user) {
          setProfileImage(data.user.user_metadata.profileImage || "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1661872946038-HFUT1IX9DB99YK644R7F/AW5A3965+copy.jpg");
        } else {
          console.log("No user data available");
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-120 h-auto shadow-lg md:w-[500px] mt-20 glass">
        <div className="flex justify-start p-8">
          <div className="w-32 rounded-full">
            <img src="https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1661872946038-HFUT1IX9DB99YK644R7F/AW5A3965+copy.jpg" alt="Profile" />
          </div>
          <div className="ml-6 justify-end">
            <p className="text-black text-lg">Mia Jones</p>
            <p>Rockaway Township • Active</p>
          </div>
        </div>
        <div className="card-body p-8">
          <h2 className="card-title gap-10">About Me</h2>
          <p>I am from New Jersey and I like cats and dogs!</p>
          <h2 className="card-title mt-4">Hobbies & Interests</h2>
          <ul className="gap-2 flex flex-wrap mt-2">
            <li className="badge badge-primary badge-outline">Baking</li>
            <li className="badge badge-primary badge-outline ml-2">Movies</li>
            <li className="badge badge-primary badge-outline ml-2">Walking</li>
          </ul>
        </div>
        <div className="p-8">
          <button onClick={signOff} className="btn btn-primary btn-outline w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

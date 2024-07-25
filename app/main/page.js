'use client';
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Grid } from "@mui/material";

function MainPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const profilesParam = searchParams.get('profiles');
  const [profiles, setProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    if (profilesParam) {
      setProfiles(JSON.parse(profilesParam));
    }
  }, [profilesParam]);

  const nextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const prevProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  const myAccountButton = () => {
    router.push('/account');
  };

  const goToVideo = () => {
    router.push('/video');
  };

  const renderProfile = (profile) => (
    <div className="flex justify-center items-center">
      <div className="carousel">
        <div id={profile.id} key={profile.name} className="carousel-item card bg-slate-300 w-80 mt-10 glass">
          <div className="avatar justify-start p-4 relative">
            <div className="w-20 rounded-full relative">
              <img src={profile.image} alt={profile.name} className="blurred-image" />
              {profile.online && (
                <span className="absolute top-0 right-0 block h-3 w-3 bg-green-500 rounded-full border-white border-2"></span>
              )}
            </div>
            <div className="ml-4 justify-end">
              <p className="text-black text-lg">{profile.name}</p>
              <p>{profile.location} &#8226; Active</p>
            </div>
          </div>
          <div className="card-body p-4">
            <h2 className="card-title">Hobbies & Interests</h2>
            <ul className="gap-2">
              {profile.hobbies.map(hobby => (
                <li key={hobby} className="badge badge-primary badge-outline ml-2">{hobby}</li>
              ))}
            </ul>
            <h3 className="mt-4 font-bold">About Me</h3>
            <p>{profile.about}</p>
          </div>
          <div className="card-actions justify-end items-center p-4">
            {profile.score && (
              <>
                <p>Compatibility Score:</p>
                <div
                  className="radial-progress bg-primary text-primary-content border-4 border-primary"
                  style={{ "--value": profile.score }}
                  role="progressbar"
                >
                  {profile.score}%
                </div>
              </>
            )}
            <button className="btn btn-primary" onClick={goToVideo}>Chat</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen w-full">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-96 right-96 top-1/2">
          <button className="btn btn-circle" onClick={prevProfile}>❮</button>
          <button className="btn btn-circle" onClick={nextProfile}>❯</button>
        </div>
        <div className="border border-solid border-b-gray p-2 flex">
          <Grid container className="flex justify-center items-center">
            <Grid item xs={7} lg={7}>
              <p className="btn">Mingle</p>
            </Grid>
            <Grid item xs={1.5} lg={0.75} textAlign="center">
              <p className="text-black">Call</p>
            </Grid>
            <Grid item xs={1.5} lg={1.5} textAlign="left">
              <button onClick={myAccountButton} className="btn btn-neutral">My Account</button>
            </Grid>
          </Grid>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {profiles.length > 0 && renderProfile(profiles[currentProfileIndex])}
        </div>
      </div>
    </Suspense>
  );
}

export default MainPage;

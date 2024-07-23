'use client'
import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Image from "next/image";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("compatible");

  const myAccountButton = () => {
    router.push('/account');
  };

  const goToVideo = () => {
    router.push('/video');
  };

  const profiles = [
    {
      id: "slide1",
      name: "Emma Doe",
      location: "Toronto",
      image: "https://preview.redd.it/theres-just-something-about-girls-named-emma-v0-gubnzeed4a7b1.jpg?width=640&crop=smart&auto=webp&s=34229ba1f8c117025595771894afd38e6e0b8746",
      hobbies: ["Hiking", "Swimming", "Cooking", "Dogs"],
      score: 70,
      about: "Hi, I'm Emma! I love exploring nature through hiking, cooling off with a swim, and experimenting with new recipes in the kitchen. I'm also a dog lover and enjoy spending time with my furry friends.",
      online: false
    },
    {
      id: "slide2",
      name: "John Doe",
      location: "NY",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKc8Ze8xPWLE_0Xpdq8iQZ-K0sHJLtoYlJzg&s",
      hobbies: ["Hiking", "Programming", "Baking", "Cats"],
      score: 30,
      about: "Hey, I'm John! I'm passionate about hiking and discovering new trails. When I'm not outside, I love coding and working on new software projects. Baking is another hobby of mine, and I enjoy making treats for my friends and family. I'm also a cat person!",
      online: false
    },
    {
      id: "slide3",
      name: "Alice Smith",
      location: "San Francisco",
      image: "https://images.pexels.com/photos/9653763/pexels-photo-9653763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hobbies: ["Yoga", "Photography", "Reading", "Traveling"],
      score: 85,
      about: "Hi, I'm Alice! Yoga keeps me balanced and energized. I have a passion for photography and love capturing beautiful moments. Reading is my escape, and traveling allows me to experience new cultures and places.",
      online: true
    },
    {
      id: "slide4",
      name: "Michael Brown",
      location: "Chicago",
      image: "https://i.pinimg.com/236x/97/be/34/97be34ba6959d9b17aade375c829a062.jpg",
      hobbies: ["Running", "Gaming", "Cooking", "Music"],
      score: 50,
      about: "Hello, I'm Michael! I start my days with a run to stay fit and clear my mind. I'm an avid gamer and enjoy immersing myself in different virtual worlds. Cooking is a creative outlet for me, and I love experimenting with new recipes. Music is my passion, and I enjoy discovering new artists and songs.",
      online: false
    },
  ];

  const nearbyProfiles = profiles.filter(profile => profile.location === "Toronto");

  const activeTodayProfiles = [
    ...nearbyProfiles,
    {
      id: "slide5",
      name: "Chris Evans",
      location: "Toronto",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hobbies: ["Cycling", "Photography", "Gaming", "Traveling"],
      score: 30,
      about: "Hi, I'm Chris! I'm an avid cyclist who enjoys capturing the world through photography. I'm also a gamer and love exploring new places through travel.",
      online: true
    },
    {
      id: "slide6",
      name: "Sophia Lee",
      location: "Toronto",
      score: 58,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hobbies: ["Yoga", "Cooking", "Hiking", "Music"],
      
      about: "Hello, I'm Sophia! Yoga keeps me grounded and healthy. I love cooking, hiking in nature, and discovering new music.",
      online: true
    },
  ];

  const renderProfiles = (profilesToRender) => (
    <div className="flex justify-center items-center">
      <div className="carousel">
        {profilesToRender.map(profile => (
          <div id={profile.id} key={profile.name} className="carousel-item card bg-slate-300 w-80 mt-10 glass">
            <div className="avatar justify-start p-4 relative">
              <div className="w-20 rounded-full relative">
                <img src={profile.image} alt={profile.name} />
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
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full">
      <div className="absolute flex justify-between transform -translate-y-1/2 left-96 right-96 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
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
        <button
          className={`btn shadow-lg rounded-full h-1 text-black hover:text-white bg-transparent ${activeSection === "compatible" && 'bg-black text-white'}`}
          onClick={() => setActiveSection("compatible")}
        >
          Compatible
        </button>
        <button
          className={`btn shadow-lg rounded-full h-1 text-black hover:text-white bg-transparent ${activeSection === "activeToday" && 'bg-black text-white'}`}
          onClick={() => setActiveSection("activeToday")}
        >
          Nearby
        </button>
      </div>
      {activeSection === "compatible" && renderProfiles(profiles)}
      {activeSection === "activeToday" && renderProfiles(activeTodayProfiles)}
      {activeSection === "nearby" && renderProfiles(nearbyProfiles)}
    </div>
  );
};

export default AboutUs;

'use client';

import { Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import supabase from '@/app/api/api';

const Page = () => {
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  const handleNextPage = async () => {
    const { data: user } = await supabase.auth.getUser();
    if (user) {
      const updates = {
        city: city,
      };
      if (profileImage) {
        updates.profileImage = profileImage;
      }

      await supabase.auth.updateUser({
        data: updates
      });
    }
    router.push('/signup/interests');
  };

  const handlePrevPage = () => {
    router.push('/signup');
  };

  const listenZipCode = async (e) => {
    const zip = e.target.value;
    setZipCode(zip);
    if (e.key === 'Enter' && zip.length === 5) {
      try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=51e875341b09b4ad4baa6b6f66939478`);
        const cityName = response.data.name;
        setCity(cityName);
        setSuggestions([cityName]);
      } catch (error) {
        console.error("Error fetching city name:", error);
        setCity("");
        setSuggestions([]);
      }
    } else {
      setCity("");
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setZipCode(suggestion);
    setCity(suggestion);
    setSuggestions([]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Stack spacing={3}>
        <h1>Welcome! Let's create your profile</h1>
        <p>Let others get to know you better</p>

        <Grid container>
          <Grid item>
            <h4>Add profile picture</h4>
          </Grid>
          <Grid item>
            <HelpIcon color='disabled'></HelpIcon>
          </Grid>
        </Grid>

        <Grid spacing={1} container>
          <Grid item>
            <div className='relative'>
              <button className='btn bg-white btn-circle border-dashed border-2 border-indigo-300 w-40 h-40 overflow-hidden'>
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <AddPhotoAlternateIcon className="w-full h-full" />
                )}
              </button>
              <input 
                type="file" 
                className="absolute inset-0 opacity-0 cursor-pointer" 
                onChange={handleImageChange} 
              />
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <h4>Add your location</h4>
          </Grid>
          <Grid item>
            <HelpIcon color='disabled'></HelpIcon>
          </Grid>
        </Grid>

        <div className="relative w-full">
          <input 
            type="text" 
            value={zipCode} 
            onChange={(e) => setZipCode(e.target.value)} 
            onKeyDown={listenZipCode} 
            placeholder="Enter your ZipCode" 
            className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" 
          />
          {suggestions.length > 0 && (
            <ul className="border border-gray-300 bg-white absolute left-0 right-0 mt-1 z-10">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  onClick={() => handleSuggestionClick(suggestion)} 
                  className="cursor-pointer hover:bg-gray-200 p-2"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Grid spacing={2} container>
          <Grid item xs={9}>
            <p>2/4 steps</p>
          </Grid>
          <Grid item xs={1.5}>
            <button className='btn' onClick={handlePrevPage}>Back</button>
          </Grid>

          <Grid item xs={1.5}>
            <button onClick={handleNextPage} className='btn btn-neutral'>Continue</button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Page;

// app/signup/interests/page.js
'use client'
import { Grid, Stack, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import supabase from "@/app/api/api";
import { useRouter } from "next/navigation";


const InterestsPage = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [selectedInterests, setSelectedInterests] = useState({});
  const router = useRouter();

  const handleInterestButtonClick = (interest) => {
    setSelectedInterests(prevState => ({
      ...prevState,
      [interest]: !prevState[interest]
    }));
  };

  const interestsButtonCreate = () =>
    interestsList.map(e => (
      <button key={e}
        className={`btn btn-xs ${selectedInterests[e] ? 'btn-selected' : ''}`}
        onClick={() => handleInterestButtonClick(e)}
      >{e}</button>
    )
  );

  const addDataToDB = async () => {
    const user = await supabase.auth.getUser();
    if (user.data) {
      try {
        await supabase.auth.updateUser({
          data: {
            aboutMe: userInput,
            interests: Object.keys(selectedInterests).filter(interest => selectedInterests[interest])
          }
        });
        router.push('/signup/personalitytest');
      } catch (error) {
        console.log("update supabase error", error);
      }
    }
  };

  const interestsList = [
    "Baking",
    "Movies",
    "Walking",
    "Gardening",
    "Arts and Crafts",
    "Reading",
    "Music",
    "Board Games",
    "Photography",
    "Puzzles",
    "Hiking",
    "Traveling",
  ];

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    runChat(userInput, setAiResponse);
  };

  return (
    <div className="h-screen w-screen flex justify-items-center justify-center items-center">
      <Stack spacing={5}>
        <div>
          <h2>Almost done</h2>
        </div>
        <div>
          <p>Final steps to complete your account</p>
        </div>

        <Grid container item id="second-row">
          <Grid container item xs={6}>
            <Grid item>
              <h4>3. About Me</h4>
            </Grid>
            <Grid item>
              <HelpIcon color="disabled"></HelpIcon>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={6}
            className="w-6/12 justify-center content-center">
            <Grid item>
              <h4>4. Select 3 to 6 hobbies and interests</h4>
            </Grid>
            <Grid item>
              <HelpIcon color="disabled"></HelpIcon>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item id="third-row">
          <Grid item xs={6}>
            <textarea
              className="textarea text-white textarea-bordered w-10/12 h-24"
              placeholder="Bio"
              value={userInput}
              onChange={handleInputChange}
            ></textarea>
            <Card>
              <CardContent>
                {aiResponse}
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            xs={6}
            id="interest-box"
            className="w-6/12 justify-center content-center"
          >
            <Grid item xs={8}>
              {interestsButtonCreate()}
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="">
          <Grid item xs={7}>
            <p>3/4 steps</p>
          </Grid>

          <Grid item xs={1}>
            <button className="btn">Back</button>
          </Grid>

          <Grid item xs={1}>
            <button onClick={addDataToDB} className='btn btn-neutral'>Continue</button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default InterestsPage;

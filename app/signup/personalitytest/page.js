// app/signup/personalitytest/page.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Grid, Stack, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import supabase from '@/app/api/api';

const PersonalityTestPage = () => {
  const router = useRouter();
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
  });

  const handlePrevPage = () => {
    router.push('/signup/profile');
  };

  const handleNextPage = async () => {
    try {
      const user = await supabase.auth.getUser();
      if (user) {
        await supabase.auth.updateUser({
          data: {
            ...responses
          }
        });
      }
      router.push('/signup/loading'); // assuming you have a completion page
    } catch (error) {
      console.error('Error saving personality test responses:', error);
    }
  };

  const handleResponseChange = (e) => {
    const { name, value } = e.target;
    setResponses({
      ...responses,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <Stack spacing={3} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">Personality Test</h1>
        <p className="text-lg mb-6 text-center">Let us know more about you</p>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h4 className="mb-2">Question 1: How do you approach new challenges?</h4>
            <RadioGroup
              name="question1"
              value={responses.question1}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I dive right in" control={<Radio />} label="I dive right in" />
              <FormControlLabel value="I plan carefully" control={<Radio />} label="I plan carefully" />
              <FormControlLabel value="I seek advice from others" control={<Radio />} label="I seek advice from others" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 2: How do you handle stress?</h4>
            <RadioGroup
              name="question2"
              value={responses.question2}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I stay calm and collected" control={<Radio />} label="I stay calm and collected" />
              <FormControlLabel value="I get anxious" control={<Radio />} label="I get anxious" />
              <FormControlLabel value="I seek distractions" control={<Radio />} label="I seek distractions" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 3: How do you prefer to spend your free time?</h4>
            <RadioGroup
              name="question3"
              value={responses.question3}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="Reading a book" control={<Radio />} label="Reading a book" />
              <FormControlLabel value="Hanging out with friends" control={<Radio />} label="Hanging out with friends" />
              <FormControlLabel value="Exploring new places" control={<Radio />} label="Exploring new places" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 4: You prioritize facts over people’s feelings when determining a course of action.</h4>
            <RadioGroup
              name="question4"
              value={responses.question4}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I strongly agree" control={<Radio />} label="I strongly agree" />
              <FormControlLabel value="I moderately agree" control={<Radio />} label="I moderately agree" />
              <FormControlLabel value="I agree" control={<Radio />} label="I agree" />
              <FormControlLabel value="I am not sure" control={<Radio />} label="I am not sure" />
              <FormControlLabel value="I disagree" control={<Radio />} label="I disagree" />
              <FormControlLabel value="I moderately disagree" control={<Radio />} label="I moderately disagree" />
              <FormControlLabel value="I strongly disagree" control={<Radio />} label="I strongly disagree" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 5: You often allow the day to unfold without any schedule at all.</h4>
            <RadioGroup
              name="question5"
              value={responses.question5}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I strongly agree" control={<Radio />} label="I strongly agree" />
              <FormControlLabel value="I moderately agree" control={<Radio />} label="I moderately agree" />
              <FormControlLabel value="I agree" control={<Radio />} label="I agree" />
              <FormControlLabel value="I am not sure" control={<Radio />} label="I am not sure" />
              <FormControlLabel value="I disagree" control={<Radio />} label="I disagree" />
              <FormControlLabel value="I moderately disagree" control={<Radio />} label="I moderately disagree" />
              <FormControlLabel value="I strongly disagree" control={<Radio />} label="I strongly disagree" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 6: You rarely worry about whether you make a good impression on people you meet.</h4>
            <RadioGroup
              name="question6"
              value={responses.question6}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I strongly agree" control={<Radio />} label="I strongly agree" />
              <FormControlLabel value="I moderately agree" control={<Radio />} label="I moderately agree" />
              <FormControlLabel value="I agree" control={<Radio />} label="I agree" />
              <FormControlLabel value="I am not sure" control={<Radio />} label="I am not sure" />
              <FormControlLabel value="I disagree" control={<Radio />} label="I disagree" />
              <FormControlLabel value="I moderately disagree" control={<Radio />} label="I moderately disagree" />
              <FormControlLabel value="I strongly disagree" control={<Radio />} label="I strongly disagree" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 7: You enjoy participating in team-based activities.</h4>
            <RadioGroup
              name="question7"
              value={responses.question7}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I strongly agree" control={<Radio />} label="I strongly agree" />
              <FormControlLabel value="I moderately agree" control={<Radio />} label="I moderately agree" />
              <FormControlLabel value="I agree" control={<Radio />} label="I agree" />
              <FormControlLabel value="I am not sure" control={<Radio />} label="I am not sure" />
              <FormControlLabel value="I disagree" control={<Radio />} label="I disagree" />
              <FormControlLabel value="I moderately disagree" control={<Radio />} label="I moderately disagree" />
              <FormControlLabel value="I strongly disagree" control={<Radio />} label="I strongly disagree" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <h4 className="mb-2">Question 8: You enjoy experimenting with new and untested approaches.</h4>
            <RadioGroup
              name="question8"
              value={responses.question8}
              onChange={handleResponseChange}
            >
              <FormControlLabel value="I strongly agree" control={<Radio />} label="I strongly agree" />
              <FormControlLabel value="I moderately agree" control={<Radio />} label="I moderately agree" />
              <FormControlLabel value="I agree" control={<Radio />} label="I agree" />
              <FormControlLabel value="I am not sure" control={<Radio />} label="I am not sure" />
              <FormControlLabel value="I disagree" control={<Radio />} label="I disagree" />
              <FormControlLabel value="I moderately disagree" control={<Radio />} label="I moderately disagree" />
              <FormControlLabel value="I strongly disagree" control={<Radio />} label="I strongly disagree" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={9}>
            <p>3/4 steps</p>
          </Grid>
          <Grid item xs={1.5}>
            <Button variant="contained" onClick={handlePrevPage}>Back</Button>
          </Grid>

          <Grid item xs={1.5}>
            <Button variant="contained" color="primary" onClick={handleNextPage}>Continue</Button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default PersonalityTestPage;

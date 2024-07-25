'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LoadingPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userResponses = {
      question1: "I dive right in",
      question2: "I stay calm and collected",
      question3: "Reading a book",
      question4: "I agree",
      question5: "I moderately agree",
      question6: "I disagree",
      question7: "I strongly agree",
      question8: "I agree"
    };

    const fetchProfilesAndCalculateScores = async () => {
      const generatedProfiles = generateProfiles();
      const compatibilityScores = calculateCompatibilityScores(userResponses, generatedProfiles);

      setTimeout(() => {
        setLoading(false);
        const queryParams = new URLSearchParams({
          profiles: JSON.stringify(compatibilityScores)
        });

        router.push(`/main?${queryParams.toString()}`); // Navigate to the main page with profiles data
      }, 4000); // Ensure the loading page is visible for at least 4 seconds
    };

    fetchProfilesAndCalculateScores();
  }, [router]);

  const hobbiesList = [
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

  const aboutMeTemplates = [
    "Hi, I'm {name}! I love {hobby1}, {hobby2}, and {hobby3}.",
    "{name} here, and I enjoy {hobby1}, {hobby2}, and {hobby3}.",
    "Hey there, I'm {name}. My favorite hobbies are {hobby1}, {hobby2}, and {hobby3}.",
  ];

  const extraAboutMe = [
    "I'm always looking for new adventures.",
    "I enjoy meeting new people and making friends.",
    "In my free time, I like to relax and unwind.",
  ];

  const generateProfiles = () => {
    const questions = [
      "question1",
      "question2",
      "question3",
      "question4",
      "question5",
      "question6",
      "question7",
      "question8",
    ];

    const options = {
      question1: ["I dive right in", "I plan carefully", "I seek advice from others"],
      question2: ["I stay calm and collected", "I get anxious", "I seek distractions"],
      question3: ["Reading a book", "Hanging out with friends", "Exploring new places"],
      question4: ["I strongly agree", "I moderately agree", "I agree", "I am not sure", "I disagree", "I moderately disagree", "I strongly disagree"],
      question5: ["I strongly agree", "I moderately agree", "I agree", "I am not sure", "I disagree", "I moderately disagree", "I strongly disagree"],
      question6: ["I strongly agree", "I moderately agree", "I agree", "I am not sure", "I disagree", "I moderately disagree", "I strongly disagree"],
      question7: ["I strongly agree", "I moderately agree", "I agree", "I am not sure", "I disagree", "I moderately disagree", "I strongly disagree"],
      question8: ["I strongly agree", "I moderately agree", "I agree", "I am not sure", "I disagree", "I moderately disagree", "I strongly disagree"],
    };

    const profiles = [];
    const predefinedScores = [70, 55, 60, 80, 65, 75, 50, 85, 90, 45];

    for (let i = 0; i < 10; i++) {
      const profile = {
        id: `slide${i + 1}`,
        name: `User ${i + 1}`,
        location: `City ${i + 1}`,
        image: `https://randomuser.me/api/portraits/men/${i + 1}.jpg`, // Using a random user image
        hobbies: [],
        about: "",
        online: i % 2 === 0,
        score: predefinedScores[i],
      };

      // Generate random hobbies
      while (profile.hobbies.length < 3) {
        const hobby = hobbiesList[Math.floor(Math.random() * hobbiesList.length)];
        if (!profile.hobbies.includes(hobby)) {
          profile.hobbies.push(hobby);
        }
      }

      // Generate About Me text
      const aboutMeTemplate = aboutMeTemplates[Math.floor(Math.random() * aboutMeTemplates.length)];
      const extraText = extraAboutMe[Math.floor(Math.random() * extraAboutMe.length)];
      profile.about = aboutMeTemplate
        .replace("{name}", profile.name)
        .replace("{hobby1}", profile.hobbies[0])
        .replace("{hobby2}", profile.hobbies[1])
        .replace("{hobby3}", profile.hobbies[2])
        .replace("{extra}", extraText);

      // Generate random responses to questions
      questions.forEach((question) => {
        const optionsForQuestion = options[question];
        profile[question] = optionsForQuestion[Math.floor(Math.random() * optionsForQuestion.length)];
      });

      profiles.push(profile);
    }

    return profiles;
  };

  const calculateCompatibilityScores = (userResponses, profiles) => {
    const compatibilityScores = profiles.map(profile => {
      return { ...profile, score: profile.score };
    });

    compatibilityScores.sort((a, b) => b.score - a.score);

    return compatibilityScores;
  };

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

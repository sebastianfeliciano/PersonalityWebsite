'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PersonalityTest = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([
    "You enjoy vibrant social events with lots of people.",
    "You often spend time exploring unrealistic yet intriguing ideas.",
    "Your travel plans are more likely to look like a rough list of ideas than a detailed itinerary.",
    "You often think about what you should have said in a conversation long after it has taken place.",
    "If your friend is sad about something, your first instinct is to support them emotionally, not try to solve their problem.",
  ]);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log("User Answers:", answers);
    router.push('/signup/loading');
  };

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-2xl my-4">Personality Test</h2>
      <div className="w-3/4">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p>{question}</p>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="agree"
                  onChange={() => handleAnswerChange(index, "agree")}
                />
                Agree
              </label>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="neutral"
                  onChange={() => handleAnswerChange(index, "neutral")}
                />
                Neutral
              </label>
              <label>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="disagree"
                  onChange={() => handleAnswerChange(index, "disagree")}
                />
                Disagree
              </label>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="btn btn-primary mt-4">
        Submit
      </button>
    </div>
  );
};

export default PersonalityTest;

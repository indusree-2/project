// src/Quiz.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css'; // Import the CSS file for styling

const Quiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    useEffect(() => {
        const fetchQuizData = async () => {
            const response = await axios.get('http://localhost:5000/api/quiz');
            setQuizData(response.data);
        };
        fetchQuizData();
    }, []);

    const handleOptionChange = (questionId, optionId) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });
    };

    const handleSubmit = () => {
        let totalScore = 0;
        const totalQuestions = quizData.questions.length;

        quizData.questions.forEach(question => {
            const selectedOption = selectedAnswers[question.id];
            const correctOption = question.options.find(option => option.is_correct);

            if (selectedOption === correctOption.id) {
                totalScore += 1; // Increment score for correct answer
            }
        });

        setScore(totalScore);
        setSubmitted(true);

        // Calculate percentage and set feedback message
        const percentage = (totalScore / totalQuestions) * 100;
        if (percentage === 100) {
            setFeedbackMessage("Perfect! You're a genius!");
        } else if (percentage >= 75) {
            setFeedbackMessage("Great job! Keep it up!");
        } else if (percentage >= 50) {
            setFeedbackMessage("Good effort! You can do even better!");
        } else {
            setFeedbackMessage("Don't worry! Keep practicing!");
        }
    };

    if (!quizData) return <div>Loading...</div>;

    return (
        <div className="quiz-container">
            <h1>{quizData.title}</h1>
            {quizData.questions.map(question => (
                <div key={question.id} className="question">
                    <h3>{question.description}</h3>
                    <div className="options">
                        {question.options.map(option => {
                            // Determine the class based on the submission state
                            let optionClass = '';
                            if (submitted) {
                                if (selectedAnswers[question.id] === option.id) {
                                    optionClass = option.is_correct ? 'correct' : 'incorrect';
                                } else if (option.is_correct) {
                                    optionClass = 'correct';
                                }
                            }

                            return (
                                <div key={option.id} className={`option ${optionClass}`}>
                                    <input
                                        type="radio"
                                        name={question.id}
                                        value={option.id}
                                        onChange={() => handleOptionChange(question.id, option.id)}
                                        disabled={submitted} // Disable options after submission
                                    />
                                    {option.description}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
            <button onClick={handleSubmit} disabled={submitted}>Submit Quiz</button>
            {submitted && (
                <div className="results">
                    <h2>Your Score: {score} / {quizData.questions.length}</h2>
                    <h3>Percentage: {((score / quizData.questions.length) * 100).toFixed(2)}%</h3>
                    <p>{feedbackMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
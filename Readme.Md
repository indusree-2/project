

Overview
------------------------------------------------------------------------------------
This is a simple quiz application built using React for the frontend and Express.js for the backend. It fetches quiz data from an external API and allows users to select answers, submit the quiz, and receive their score along with feedback.

-------------------------------------------------------------------------------------

Frontend (React)

1. **Quiz.css**
Contains styles for the quiz components:
- .quiz-container: Styles the main container.
- .question: Styles the question section.
- .options: Styles the answer options.
- .option.correct: Highlights correct answers in green.
- .option.incorrect: Highlights incorrect answers in red.
- button: Styles the submit button.
- .results: Styles the result display area.

2. **Quiz.js**
This is the main quiz component.

**State Variables:**
- quizData: Stores quiz questions and options fetched from the API.
- score: Stores the user's final score.
- selectedAnswers: Tracks selected options.
- submitted: Determines whether the quiz has been submitted.
- feedbackMessage: Stores performance feedback based on the score.

**Key Functions:**
- useEffect: Fetches quiz data from "http://localhost:5000/api/quiz" on component mount.
- handleOptionChange(questionId, optionId): Updates the selected answer for each question.
- handleSubmit(): Calculates the score, updates submitted state, and provides feedback.

**Rendering Logic:**
- Displays a loading message until data is fetched.
- Iterates over "quizData.questions" to render questions and options.
- Displays a results section with score, percentage, and feedback after submission.

3. **App.js**
- Imports and renders the "Quiz" component inside a "<div className='App'>".

-------------------------------------------------------------------------------
 Backend (Express.js)

1. **server.js**
Sets up an Express.js server that fetches quiz data from an external API.

**Modules Used:**
- express: Handles HTTP requests.
- axios: Fetches data from an external API.
- cors: Enables cross-origin resource sharing.

 **Key Endpoints:**
- "GET /api/quiz": 
  - Fetches quiz data from "https://api.jsonserve.com/Uw5CrX".
  - Sends the response data to the frontend.

 **Server Initialization:**
- Runs the server on port '5000' or an environment-defined port.
- Logs a message indicating that the server is running.

-------------------------------------------------------------------------------

Setup and Installation

 Prerequisites:
- Node.js & npm
- React.js
- Express.js

 **Installation Steps:**
1. Clone the repository.
2. Install dependencies:
   npm install
  
3. Start the backend server:
   node server.js
   
4. Start the frontend:
   npm start
  
5. Open the browser and navigate to `http://localhost:3000` to use the quiz app.
---------------------------------------------------------------------------------------
##Video Link

https://drive.google.com/file/d/1Jg1Y6pB7fIGP3HLhPiqXKNJBSk4lk4y5/view?usp=sharing

---------------------------------------------------------------------------------------

## Future Enhancements
- Add a timer for each question.
- Implement user authentication.
- Store quiz results in a database.
- Enhance UI with animations.

--------------------------------------------------------------------------------------

## Conclusion
This documentation provides a high-level overview of the quiz application, covering its structure, components, and functionality. Let me know if you need further modifications! 🚀


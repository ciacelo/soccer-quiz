import React, { useState, useEffect } from 'react';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackGround';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
// import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuizPage/QuestionWidget';
import LoadingWidget from '../src/components/QuizPage/LoadingWidget';

const screenStates = { LOADING: 'LOADING', QUIZ: 'QUIZ', RESULT: 'RESULT' };

const QuizPage = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const { questions } = db;
  const totalQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const [result, setResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;
    // console.log('RESULT: ', resultCurrent);
    // setResult([...result, resultCurrent]);
    // console.log(resultCurrent);
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
            addResult={(res) => setResult([...result, res])}
          />
        )}
        {screenState === screenStates.LOADING
          && <LoadingWidget />}
        {screenState === screenStates.RESULT
          && (
          <h1>
            você acertou:
            {' '}
            {result.filter((x) => x).length}
            {' '}
            de
            {' '}
            {totalQuestions}
          </h1>
          )}
        <GitHubCorner projectUrl="https://github.com/ciacelo/soccer-quiz" />
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;

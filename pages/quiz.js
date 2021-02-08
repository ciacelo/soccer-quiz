import React, { useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackGround';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
// import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import QuestionWidget from '../src/components/QuizPage/QuestionWidget';

const QuizPage = () => {
  const [x, setX] = useState('');
  const { questions } = db;
  const totalQuestions = questions.length;
  const questionIndex = 0;
  const question = questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera:</h1>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/ciacelo/soccer-quiz" />
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;

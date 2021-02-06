import React from 'react';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackGround';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Messi</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>O que você conhece sobre futebol?</h1>
          </Widget.Content>

        </Widget>
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
}

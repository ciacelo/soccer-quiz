import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackGround';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name);
    router.push(`/quiz?name=${name}`);
    // eslint-disable-next-line no-console
    console.log('requisição React: ');
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Messi</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => handleSubmit(event)}>
              {/* <input
                placeholder="Digite seu nome"
                name="name"
                onChange={(e) => setName(e.target.value)}
              /> */}
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                name="name"
                value={`${name}`}
              />
              {/* <button type="submit" disabled={name.length === 0}>
                Jogar
              </button> */}
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
              </Button>
            </form>
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

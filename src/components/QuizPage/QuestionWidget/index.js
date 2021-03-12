import React, { useState } from 'react';

import PropTypes from 'prop-types';
// import db from '../../../../db.json';
import Widget from '../../Widget';
import Button from '../../Button';

// eslint-disable-next-line arrow-body-style
const SCREEN_STATE = {
  error: 'error',
  right: 'right',
  loading: 'loading',
};

const QuestionWidget = ({
  question, totalQuestions, questionIndex, onSubmit, addResult,
}) => {
  const questionID = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [statusAnswer, setStatusAnswer] = useState(SCREEN_STATE.loading);
  const result = selectedAlternative === question.answer;
  // const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedAlternative, question.answer, question);

    function resultAlternative() {
      if (selectedAlternative === question.answer) {
        setStatusAnswer(SCREEN_STATE.right);
      } else {
        setStatusAnswer(SCREEN_STATE.error);
      }
    }
    resultAlternative();

    setTimeout(() => {
      onSubmit();
      console.log(result);
      addResult(result);
      setStatusAnswer(SCREEN_STATE.loading);
      setSelectedAlternative(null);
    }, 3000);
    // onSubmit();
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="ilustração"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeID}
                key={alternativeID}
              >
                <input
                  type="radio"
                  // style={{ display: 'none' }}
                  id={alternativeID}
                  name={questionID}
                  value={alternative}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={selectedAlternative !== 0 && !selectedAlternative}>
            Confirmar
          </Button>

          {SCREEN_STATE.right === statusAnswer && <p>Você acertou!</p>}
          {SCREEN_STATE.error === statusAnswer && <p>Você errou!</p>}
        </form>
      </Widget.Content>

    </Widget>
  );
};

QuestionWidget.defaultProps = {
  question: {},
};

QuestionWidget.propTypes = {
  question: PropTypes.objectOf(Object),
  totalQuestions: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default QuestionWidget;

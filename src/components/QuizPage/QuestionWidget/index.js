import React, { useState } from 'react';

import PropTypes from 'prop-types';
// import db from '../../../../db.json';
import Widget from '../../Widget';
import Button from '../../Button';

// eslint-disable-next-line arrow-body-style
const QuestionWidget = ({
  question, totalQuestions, questionIndex, onSubmit,
}) => {
  const questionID = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedAlternative);
    onSubmit();
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
                  onChange={(e) => setSelectedAlternative(e.target.value)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">
            Confirmar
          </Button>
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

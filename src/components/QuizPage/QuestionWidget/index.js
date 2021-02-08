import React from 'react';

import PropTypes from 'prop-types';
// import db from '../../../../db.json';
import Widget from '../../Widget';
import Button from '../../Button';

// eslint-disable-next-line arrow-body-style
const QuestionWidget = ({ question, totalQuestions, questionIndex }) => {
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

        <Button>
          Confirmar
        </Button>
      </Widget.Content>

    </Widget>
  );
};

QuestionWidget.defaultProps = {
  question: {},
};

QuestionWidget.propTypes = {
  question: PropTypes.objectOf,
  totalQuestions: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default QuestionWidget;

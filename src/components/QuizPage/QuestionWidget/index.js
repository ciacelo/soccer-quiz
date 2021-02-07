import React from 'react';

import PropTypes from 'prop-types';
// import db from '../../../../db.json';
import Widget from '../../Widget';
import Button from '../../Button';

// eslint-disable-next-line arrow-body-style
const QuestionWidget = ({ questions }) => {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta n°1 de ${questions.length}`}
        </h3>
      </Widget.Header>
      <img
        src={questions[0].image}
        alt="ilustração"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <h2>
          {questions[0].title}
        </h2>
        <p>
          {questions[0].description}
        </p>

        <Button>
          Confirmar
        </Button>
      </Widget.Content>

    </Widget>
  );
};

QuestionWidget.defaultProps = {
  questions: [],
};

QuestionWidget.propTypes = {
  questions: PropTypes.arrayOf,
};

export default QuestionWidget;

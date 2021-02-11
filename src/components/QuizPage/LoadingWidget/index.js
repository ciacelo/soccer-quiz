import React from 'react';
import Widget from '../../Widget';

// eslint-disable-next-line arrow-body-style
const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        <div>
          loading...
        </div>
      </Widget.Content>
    </Widget>
  );
};

export default LoadingWidget;

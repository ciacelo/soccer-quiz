import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// eslint-disable-next-line react/prop-types
const Logo = ({ className }) => (
  <Image
    src="/static/Soccer-Quiz--unscreen.gif"
    alt="soccerquiz"
    width={200}
    height={200}
    className={className}
  />
);

const QuizLogo = styled(Logo)`
  margin: auto;
  margin-top: -30px !important;
  display: block;
  filter: drop-shadow(0px 15px 15px #040404) !important;
  min-width: 250px !important;
  min-height: 250px !important;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;

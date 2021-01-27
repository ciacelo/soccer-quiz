import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widget"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 1;
`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of Messi</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>O que você conhece sobre futebol?</h1>
          </Widget.Content>
          
        </Widget>
        legal
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera:</h1>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}

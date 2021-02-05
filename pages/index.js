import styled from 'styled-components'
import db from "../db.json"
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackGround'
import QuizContainer from '../src/components/QuizContainer'
import Widget from "../src/components/Widget"
import Head from 'next/head'
import QuizLogo from '../src/components/QuizLogo'



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Jogo do Quiz | Futebol na Veia</title>
        <meta name="description" content="Este Quiz vai lhe testar, quanto aos seus conhecimentos 'futebolisticos'."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <QuizContainer>
        <QuizLogo/>
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
        <Footer/>
        <GitHubCorner projectUrl={"https://github.com/ciacelo/soccer-quiz"}/>
      </QuizContainer>
    </QuizBackground>
  )
}

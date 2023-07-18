import { Container, DescriptionContainer, InputContainer, InputLabel, LoginButton, LoginDescription, LoginTitle, Logo, NameInput, PageContainer, PhotoInput } from "./loginPage.style";

import WhatssapLogo from '../../assets/whatssap-logo.png'
import { LoginTypes } from "../../types/login-types";
import socket from 'socket.io-client'

const io = socket('http://localhost:4000')

function LoginPage({name, setName, setJoined}: LoginTypes){

  const handleJoin = () => {
    if(name){
      io.emit("join", name);
      setJoined(true)
    }
  }

  return(
    <PageContainer>
      <Container>
        <Logo src={WhatssapLogo}/>
        <LoginTitle>Fazer Login</LoginTitle>
        <DescriptionContainer>
          <LoginDescription>Insira um nome de usuário e se possível, uma foto de perfil</LoginDescription>
        </DescriptionContainer>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <NameInput onChange={(e) => setName(e.target.value)}/>
        </InputContainer>
        <InputContainer>
          <InputLabel>Foto De Perfil (Opcional)</InputLabel>
          <PhotoInput />
        </InputContainer>
        <LoginButton onClick={() => handleJoin()}>Avançar</LoginButton>
      </Container>
    </PageContainer>
  )
}

export default LoginPage
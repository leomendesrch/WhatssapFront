import './App.css';

import { useEffect } from 'react';

import { BackGround, ChatContainer, Container } from './App.style';
import UserContainer from './components/userContainer/userContainer';
import LoginPage from './components/loginPage/loginPage';
import MessagesContainer from './components/messagesContainer/messagesContainer';

import { useWhatssapContext } from './hooks/useWhatssapGlobalContext';
import { messageProps } from './types/message-types';

function App() {
  const {io, setUsers, joined, setMessages} = useWhatssapContext()


  useEffect(() => {
    io.on("users", (users) => setUsers(users))
    io.on("message", (message: messageProps) => setMessages((prevMessages: messageProps[]) => [...prevMessages, message]))
  }, [])



  if(!joined){
    return(
      <>
        <LoginPage />
      </>
    )
  }

  return (
    <Container>
      <BackGround></BackGround>
      <ChatContainer>
        <UserContainer />
        <MessagesContainer />
      </ChatContainer>
    </Container>
  );
}

export default App;

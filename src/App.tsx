import './App.css';

import { useEffect, useState } from 'react';


import socket from 'socket.io-client'

import { userProps } from './types/user-types';
import { messageProps } from './types/message-types';

import { BackGround, ChatContainer, Container } from './App.style';
import UserContainer from './components/userContainer/userContainer';
import LoginPage from './components/loginPage/loginPage';
import MessagesContainer from './components/messagesContainer/messagesContainer';


const io = socket('http://localhost:4000')

function App() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [users, setUsers] = useState<userProps[]>([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<messageProps[]>([]);

  useEffect(() => {
    io.on("users", (users) => setUsers(users))
    io.on("message", (message) => setMessages((messages) => [...messages, message]))
  }, [])

  if(!joined){
    return(
      <>
        <LoginPage name={name} setName={setName} setJoined={setJoined}/>
      </>
    )
  }

  return (
    <Container>
      <BackGround></BackGround>
      <ChatContainer>
        <UserContainer messages={messages}/>
        <MessagesContainer />
      </ChatContainer>
    </Container>
  );
}

export default App;

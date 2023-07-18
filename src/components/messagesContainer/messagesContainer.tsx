import GroupImage from '../../assets/PPImage.jpg'
import SearchIcon from '../../assets/searchIcon.png'
import SettingsIcon from '../../assets/more.png'
import SendIcon from '../../assets/send.png'
import BackGroundImage from '../../assets/chat-background.png'

import {ChatHeader, ChatInput, ChatInputArea, ChatMessagesArea, IconContainer, IconImage, MessageContainerComponent, MessageSettings, MyUserMessage, OtherUserMessage, SendImage, UserContainerMessageLeft, UserContainerMessageRight, ContactsMessageItem, LastMessage, TitleMessage, UserImage, UserMessageContainer, UserMessageInfo } from './messagesContainer.style';

import { useWhatssapContext } from '../../hooks/useWhatssapGlobalContext'

function MessagesContainer(){
  const { io, users, message, messages ,setMessage, name} = useWhatssapContext()

  const handleSendMessage = () => {
    if(message){
      io.emit("message", {message, name})
      setMessage("")
    }
  }

  return(
  <MessageContainerComponent BackGroundImage={BackGroundImage}>
    <ChatHeader>
      <ContactsMessageItem>
          <UserMessageContainer>
            <UserImage src={GroupImage} alt="ProfilePic"/>
            <UserMessageInfo>
              <TitleMessage >Profissão Programador</TitleMessage>
              <LastMessage>{users.map((user, index) => (
                  <span>{user.name}{index + 1 < users.length? ', ' : ''}</span>
                ))}</LastMessage>
            </UserMessageInfo>
          </UserMessageContainer>

          <MessageSettings>
            <IconContainer>
              <IconImage src={SearchIcon} alt="Search" style={{ height: "18px" }}/>
            </IconContainer>

            <IconContainer>
              <IconImage src={SettingsIcon} alt="Settings"/>
            </IconContainer>
          </MessageSettings>
      </ContactsMessageItem>
    </ChatHeader>

    <ChatMessagesArea>
      {messages.map((message, index) => (
        message.name === name?
        <UserContainerMessageRight>
          {message.name === name?  
            <MyUserMessage>{message.name? `${message.name}:` : ''} {message.message}</MyUserMessage>
            :
            <OtherUserMessage>{message.name? `${message.name}:` : ''} {message.message}</OtherUserMessage>
          }
        </UserContainerMessageRight>
        :
        <UserContainerMessageLeft>
          {message.name === name?  
            <MyUserMessage>{message.name? `${message.name}:` : ''} {message.message}</MyUserMessage>
            :
            <OtherUserMessage>{message.name? `${message.name}:` : ''} {message.message}</OtherUserMessage>
          }
        </UserContainerMessageLeft>
      ))}
    </ChatMessagesArea>

    <ChatInputArea>
      <ChatInput
      placeholder="Mensagem"
      className="chat-input"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter'? handleSendMessage() : null}
      ></ChatInput>
      <SendImage src={SendIcon} alt="SendMessage" onClick={() => handleSendMessage()}></SendImage>
    </ChatInputArea>
  </MessageContainerComponent>
  )
}

export default MessagesContainer
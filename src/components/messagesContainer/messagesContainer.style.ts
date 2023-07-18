import { styled } from "styled-components";

export const MessageContainerComponent = styled.div<{ BackGroundImage: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #efeae2;
  background-image: url(${({BackGroundImage}) => BackGroundImage});
`

export const ChatHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--light-gray);
  align-items: center;
  font-size: 15px;
`


export const MessageSettings = styled.div`
  display: flex;
  gap: 8px;
`


export const IconContainer = styled.div`
  width: 42px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
`


export const IconImage = styled.img`
  height: 22px;
`


export const ChatMessagesArea = styled.div`
  padding-top: 10px;
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
`


export const UserContainerMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 57px;
  margin: 2px 0;
  font-size: 14px;
`


export const UserContainerMessageRight = styled(UserContainerMessage)`
  justify-content: flex-end;
`

export const UserContainerMessageLeft = styled(UserContainerMessage)`
  justify-content: flex-start;
`

export const MyUserMessage = styled.span`
  background-color: #d9fdd3;
  padding: 8px 10px;
  border-radius: 5px;
  position: relative;
  overflow-wrap: break-word;
  max-width: 700px;
  border-radius: 8px;
`

export const OtherUserMessage = styled.span`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  overflow-wrap: break-word;
  max-width: 700px;
`

export const ChatInputArea = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  padding: 10px 12px 10px 15px;
  background-color: var(--light-gray);
  justify-content: center;
  align-items: center;
`


export const ChatInput = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  padding: 0 30px 0 15px;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
`

export const SendImage = styled.img`
  height: 23px;
  margin-left: 18px;
  cursor: pointer;
`




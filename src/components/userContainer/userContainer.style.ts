import {styled} from 'styled-components'

export const UserContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  max-width: 43%;
`


export const UserInfo = styled.div`
  display: flex;
  padding: 10px 18px;
  justify-content: space-between;
  width: 100%;
  background-color: var(--light-gray);
  border-right: 1px solid #e6e6e6;
`

export const UserImage = styled.img`
  width: 42px;
  height: 40px;
  border-radius: 50%;
`


export const UserSettings = styled.div`
  display: flex;
  gap: 10px;
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

  &:hover{
    background-color: #e6e6e6;
  }
`

export const IconImage = styled.img`
  height: 22px;
`

export const SearchContainer = styled.div`
  display: flex;
  padding: 8px 8px 8px 12px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`

export const SearchInputContainer = styled.div`
  display: flex;
  height: 34px;
  width: 100%;
  border-radius: 8px;
  margin-right: 8px;
  position: relative;
  color: var(--font-gray);
`

export const SearchInputIcon = styled.img`
  position: absolute;
  height: 13px;
  left: 18px;
  bottom: 10px;
`

export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  font-size: 15px;
  line-height: 150%;
  width: 100%;
  border-radius: 8px;
  padding: 3px 30px 3px 62px;
  border: none;
  background-color: var(--light-gray);
  height: 100%;
  letter-spacing: 0.1px;
  line-height: 1.5;

  &::placeholder{
    color: var(--font-gray);
    font-size: 13px;
  }

  &:focus{
    outline: none;
  }
`  

export const SearchFilterIcon = styled.div`
  width: 27px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const FilterIconComponent = styled.img`
  height: 15px;
`

export const ContactsMessage = styled.div`
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar{
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
  }
`

export const ContactsMessageItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 15px;
  align-items: center;
  position: relative;
`

export const UserMessageContainer = styled.div`
  display: flex;
  gap: 15px;

`


export const ContactImage = styled.img`
  width: 50px;
  height: 47px;
  border-radius: 50%;
`


export const UserMessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
`


export const TitleMessage = styled.span`
  max-width: 350px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const LastMessage = styled.div`
  display: flex;
  max-width: 90%;
  font-size: 14px;
  color: var(--font-gray);
`


export const MessageData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--font-gray);
`

export const LastMessageTime = styled.span`

`


export const UnreadMessageQuantity = styled.span`

`


export const ItemBorderBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 16.5%;
  width: calc(100% - 16.5%);
  height: 1px;
  background-color: #e6e6e6;
`




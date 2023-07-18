import { styled } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(229, 226, 221, 1) 0%, rgba(210, 215, 219, 1) 100%);
`

export const BackGround = styled.div`
  background-color:#08ac84;
  width: 100%;
  height: 13%;
  position: absolute;
  top: 0;
`


export const ChatContainer = styled.div`
  width: 95%;
  max-width: 1800px;
  height: 96%;
  position: absolute;
  background-color: white;
  display: flex;
`
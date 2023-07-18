import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

export const Container = styled.div`
  height: 500px;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border: 1px solid #e3e3e3;
  align-self: center;
  gap: 15px;
  border-radius: 8px;
`

export const Logo = styled.img`
  width: 125px;

`

export const LoginTitle = styled.span`
  font-weight: 600;
  font-size: 23px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 70%;
  text-align: center;
`

export const LoginDescription = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 gap: 5px;
 margin-bottom: 10px;
`

export const InputLabel = styled.label`
 font-size: 17px;
 font-weight: 600;
`

export const NameInput = styled.input`
  width: 330px;
  height: 42px;
  padding-left: 10px;
  border: 1px solid #e3e3e3;
  outline: none;
  font-size: 15px;
  border-radius: 4px;

  &:focus{
    border: 1px solid green;
  }
`

export const PhotoInput = styled(NameInput)`

`
export const LoginButton = styled.button`
  padding: 12px 24px;
  color: white;
  background-color: green;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 18px;
  border-radius: 4px;
`

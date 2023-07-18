import { createContext, useState } from "react";

import socket, { Socket } from "socket.io-client";

import { userProps } from "../types/user-types";
import { messageProps } from "../types/message-types";

interface WhatssapProviderProps{
  children: React.ReactNode
}

interface WhatssapContextProps{
  io: Socket
  message: string
  setMessage: (message: string) => void
  name: string
  setName: (name: string) => void
  joined: boolean
  setJoined: (joined: boolean) => void
  users: userProps[]
  setUsers: (users: userProps[]) => void
  messages: messageProps[]
  setMessages: React.Dispatch<React.SetStateAction<messageProps[]>>;
}
export const WhatssapContext = createContext({} as WhatssapContextProps);

export const WhatssapProvider = ({children}: WhatssapProviderProps) => {
  const io = socket('http://localhost:4000')
  const [message, setMessage] = useState('');
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);
  const [users, setUsers] = useState<userProps[]>([]);
  const [messages, setMessages] = useState<messageProps[]>([]);

  
  return(
    <WhatssapContext.Provider
    value={
      {io, message, setMessage, name, setName, joined, setJoined, users, setUsers, messages, setMessages}
    }>
      {children}
    </WhatssapContext.Provider>
  )
}
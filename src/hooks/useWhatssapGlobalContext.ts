import { useContext } from "react";
import { WhatssapContext } from "../contexts/WhatssapGlobalContext";

export const useWhatssapContext = () => useContext(WhatssapContext)

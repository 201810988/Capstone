
import crypto from 'crypto-js';
import { createContext } from 'react';


export let lol = {
  key: 'U2FsdGVkX1/JuOv6W8vk/647HfU0Vqw9c8qM+E5sBovK992T2gXh14rjH/mpR1im4tB5eXgCBgsZF5y17ZNyPg==',
  kr_host: 'https://kr.api.riotgames.com/lol',
  cdn: 'https://ddragon.leagueoflegends.com/cdn/11.16.1',
  pw: '2021 SM CAPSTONE',
  setPW: () => {},
  decryption: (k, p) => {
    return crypto.AES.decrypt(k, p).toString(crypto.enc.Utf8);
  },
  login: "Loading",
  setLogin: () => {},
}



export const Context = createContext(lol);


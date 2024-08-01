import { createContext , useContext  } from "react";


export const themeContexts = createContext({
    themeMode: 'light',
    darkTheme: () => {} ,
    lightTheme: () => {}
 }) 

 export const ThemeProvider = themeContexts.Provider 

 export default function useTheme() { 
    return useContext(themeContexts )
 }
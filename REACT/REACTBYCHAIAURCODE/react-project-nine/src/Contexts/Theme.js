import {createContext , useContext} from "react";

export const ThemeContext = createContext({
    themeMode:"Light",
    darkTheme :()=>{},
    lightTheme: ()=>{},
})

// pichle project me provider ke liye alag se file banaye teh yaha yahi se export kar detnet
export const ThemeProvider =  ThemeContext.Provider;

// yaha tum custom hook bana ke export kar sakate alerydy priviosu me kiye hao
export default function useTheme(){
    // usetheeme funtciton ke help se usecontext ke dawara tehemcontext share kar  liye ab isko render kar sakte jha choao
    return useContext(ThemeContext);
}
import React,{useState, useEffect} from "react";
function TimerComponent(){
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const intervaLId = setInterval(()=>{
            setSeconds(prevSeconds =>prevSeconds+1);
        },1000);
       // har ek second ke badd ye function  render hogha
        return ()=>{
            clearInterval(intervaLId);
// ye cleanup function taab cheleag jab ye component remove kar de app.jsx se and timer stop ho jyega
        };
    } , []);
    //2nd varitaion eg it will run on first render only
    return (
        <div>
            <h1>Seconds:{seconds}</h1>
        </div>
    );
}
export default TimerComponent
import {useEffect,useRef,useState, React } from "react"
import "./Countdown.css"
const Coutdown = ()=>{
const  [timerDay,settimerDay] = useState('00');
 const [timerHour,settimerHour] = useState('00');
 const [timerMin,settimerMin] = useState('00');
 const [timerSec,settimerSec] = useState('00');
 let Interval = useRef()
useEffect(()=>{
    StartTime()
    return(
        clearInterval(Interval.current)
    )
})
 const StartTime = ()=>{
 const coutdowndata = new Date('Mars 13, 2025 00:00:00').getTime();
Interval = setInterval(()=>{
    const now = new Date().getTime();
    const distance =   coutdowndata - now  ;
    const day      = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour     = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const min      = Math.floor((distance % (1000 * 60 * 60 ) / (1000 * 60)));
    const sec      = Math.floor((distance % (1000 * 60)) / 1000);
    if(distance < 0){
         clearInterval(Interval.current);

    }else{
        settimerDay(day)
        settimerHour(hour)
        settimerMin(min)
        settimerSec(sec)
    }
},1000);
}
   return(
    <div className="pa" >
        <div className="ch">
            <div className="eleman">
                <div>{timerDay}</div>
                <div>Day</div>
            </div>
            :
            <div className="eleman">
                <div>{timerHour}</div>
                <div>Hour</div>
            </div>
            :
            <div className="eleman">
                <div>{timerMin}</div>
                <div>Min</div>
            </div>
            :
            <div className="eleman">
                <div>{timerSec}</div>
                <div>Sec</div>
            </div>
        </div>
    </div>
) ;
}
export default Coutdown
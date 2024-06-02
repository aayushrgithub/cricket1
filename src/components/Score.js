import { useState } from "react";
const Score = () => {

    const [check,setCheck] = useState(false);
    const [total,setTotal] = useState(0);
    const [over,setOver] = useState(0);
    const [b1,setB1] = useState("");
    const [b2,setB2] = useState("");
    const [arrOut, setArrOut] = useState([{batsman:"",runs:null}]);
    const [b1Runs,setB1Runs] = useState(0);
    const [b2Runs,setB2Runs] = useState(0);
    const [wicketCount, setWicketCount] = useState(0);
    const [innings, setInnings] = useState(false);
    const [ballCount,setBallCount] = useState(6);

 

    const handleWicket = (value) => {
        {value==1?setArrOut([...arrOut,{batsman:b1,runs:b1Runs}]):setArrOut([...arrOut,{batsman:b2,runs:b2Runs}])}
        {value==1?setB1(""):setB2("")};
        {value==1?setB1Runs(0):setB2Runs(0)};
        setWicketCount(wicketCount+1);
        setBallCount(prev=>prev-1);
        if(ballCount===1){
           setOver(over+1);
           setBallCount(6);
        } 
        if(over===3 && ballCount===1){
            setInnings(true)
        } 
    }

    const handleTotalAndRuns = (value) => {
        
        if(value==7){
            setTotal(total+1);
        }
        else{
            setTotal(total+value);
            setB1Runs(b1Runs+value)
        }

        if(value!==7){
            setBallCount(prev=>prev-1);
        if(ballCount===1){
           setOver(over+1);
           setBallCount(6);
        } 
        if(over===3 && ballCount===1){
            setInnings(true)
        } 
        }
    }

    const TotalAndRuns = (value) => {
        if(value==7){
            setTotal(total+1);
        }
        else{
            setTotal(total+value);
            setB2Runs(b2Runs+value)
        }

       if(value!==7){
        setBallCount(prev=>prev-1);
        if(ballCount===1){
           setOver(over+1);
           setBallCount(6);
        } 
        if(over===3 && ballCount===1){
            setInnings(true)
        } 
       }
    }

    return (
        <div className="mt-7">
            <h1 className="text-center text-2xl text-red-700 font-semibold">Team Total : {total} / {wicketCount}</h1>
            <div className="flex gap-2 justify-center items-center">
            <h1 className="text-center text-xl text-red-700">Overs completed : {over}</h1>
            <h1 className="text-center text-xl text-red-700">Balls Left : {ballCount} </h1>
            </div>
            
            {innings?<h1 className="text-center">Innings Completed</h1>:null}
            <div className="sm:flex gap-3 items-center mt-3">
                <div className="flex gap-2">
                <input checked={check} type="checkbox" onChange={()=>setCheck(!check)} />
                <input className="text-center border-2  opacity-60" placeholder="Enter batsman name" value={b1} onChange={(e)=>setB1(e.target.value)} />
                </div>
                <div className="flex sm:gap-3 gap-1.5 mt-3 sm:mt-0">
                <h1 onClick={()=>handleTotalAndRuns(1)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">1</h1>
                <h1 onClick={()=>handleTotalAndRuns(2)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">2</h1>
                <h1 onClick={()=>handleTotalAndRuns(4)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">4</h1>
                <h1 onClick={()=>handleTotalAndRuns(6)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">6</h1>
                <h1 onClick={()=>handleWicket(1)} className="rounded-full px-2 bg-red-700 text-white cursor-pointer">W</h1>
                <h1 onClick={()=>handleTotalAndRuns(7)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">WD</h1>
                <h1 onClick={()=>handleTotalAndRuns(7)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">NB</h1>
                <h1 className="rounded-full px-2 bg-yellow-500 text-white cursor-pointer">{b1Runs}</h1>
                </div>
            </div>

            <div className="sm:flex gap-3 items-center mt-3">
                <div className="flex gap-2">
                <input checked={!check} type="checkbox" onChange={()=>setCheck(!check)}/>
                <input className="text-center border-2  opacity-60 text-gray-700" placeholder="Enter batsman name" value={b2} onChange={(e)=>setB2(e.target.value)}/>
                </div>
                <div className="flex sm:gap-3 gap-1.5 mt-3 sm:mt-0">
                <h1 onClick={()=>TotalAndRuns(1)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">1</h1>
                <h1 onClick={()=>TotalAndRuns(2)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">2</h1>
                <h1 onClick={()=>TotalAndRuns(4)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">4</h1>
                <h1 onClick={()=>TotalAndRuns(6)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">6</h1>
                <h1 onClick={()=>handleWicket(2)} className="rounded-full px-2 bg-red-700 text-white cursor-pointer">W</h1>
                <h1 onClick={()=>handleTotalAndRuns(7)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">WD</h1>
                <h1 onClick={()=>handleTotalAndRuns(7)} className="rounded-full px-2 bg-blue-700 text-white cursor-pointer">NB</h1>
                <h1 className="rounded-full px-2 bg-yellow-500 text-white cursor-pointer">{b2Runs}</h1>
                </div>
            </div>


            {/* <div className="flex gap-4 justify-center items-center">
                <h1>Batsman Name</h1>
                <h1>Runs</h1>
            </div> */}

            <div class="relative overflow-x-auto mt-7">
    <table class="w-full text-sm text-left rtl:text-right text-yellow-700 dark:text-yellow-700">
        <thead class="text-xs text-yellow-700 uppercase bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Batsman Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Runs
                </th>
            </tr>
        </thead>
        {arrOut?.length>1 ? arrOut.map((item)=>{
               return (
                <tbody>
            <tr class="bg-orange border-b dark:bg-yellow-800 dark:border-yellow-700">
                <th scope="row" class="tracking-widest px-6 py-4 font-medium text-yellow-100 font-bold whitespace-nowrap dark:text-yellow">
                    {item.batsman}
                </th>
                <td class="px-6 py-4 text-yellow-100 font-bold">
                    {item.runs}
                </td>
            </tr>
        </tbody>
               )
            }) :null}
    </table>
</div>

            
            {/* <h1>Overs: {over}</h1> */}
            
        </div>
    )
}
export default Score;
 
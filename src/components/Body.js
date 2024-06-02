import { useState } from "react";
import Score from "./Score";
const Body = () => {

    const [hidden, setHidden] = useState(false);
    const [data, setData] = useState({
        team1:null,
        team2:null,
        overs:null,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        setHidden(true)
    }
    return (
        <div className="flex justify-center items-center pt-7">
            {!hidden?<form onSubmit={handleSubmit}>
            <div className="flex sm:gap-4">
                <input className="border-2 text-center max-w-[40%] opacity-60" placeholder="Team 1" value={data.team1} onChange={(e)=>setData({...data,team1:e.target.value})}/>
                <h1 className="tracking-widest text-yellow-100">VS</h1>
                <input className="border-2 text-center max-w-[40%] opacity-60" placeholder="Team 2" value={data.team2} onChange={(e)=>setData({...data,team2:e.target.value})}/>
            </div>
            <div className=" flex gap-2 max-w-[70%] mx-auto mt-5">
            <label className="tracking-widest text-yellow-100 ">Overs:</label>
            <input className="text-center border-2 opacity-60" placeholder="Enter no. of Overs" value={data.overs} onChange={(e)=>setData({...data,overs:e.target.value})}/>
            </div>
            <button type="submit" className="p-1 px-2 mx-[35%] mt-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md">Submit</button>
            </form>:null}

            {hidden?<div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
                <div className="flex items-baseline gap-3 ml-[15%] sm:ml-0">
                <h1 className="text-3xl sm:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold tracking-widest p-2">{data.team1}</h1>
                <h1 className="text-xl sm:text-2xl text-yellow-100">VS</h1>
                <h1 className="text-3xl sm:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold tracking-widest p-2">{data.team2}</h1>
                </div>
                <p className="mt-5 text-xl ml-[10%] sm:ml-0 text-red-700 font-semibold">Lets play {data.overs} overs match</p>
                <Score/>
            </div>:null}
        </div>
    )
}

export default Body;
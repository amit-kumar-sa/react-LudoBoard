import { useState } from "react";

export default function LudoBord(){
    let[moves,setMoves]=useState({Blue:0,Yellow:0,Green:0,Red:0});
    let [arr , setArr]=useState(["no moves"]);
    let updateBlue =()=>{
        
        console.log(`moves.blue=${moves.Blue}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,Blue:prevMoves.Blue +1}
        });
        
        setArr((prevArr)=>{
            return [...prevArr , " blue moves"]
    });
        
        console.log(arr)
    
    }

    let updateYellow =()=>{
        
        console.log(`moves.yellow=${moves.Yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,Yellow:prevMoves.Yellow +1}
        });
    }
    let updateGreen =()=>{
        
        console.log(`moves.Green=${moves.Green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,Green:prevMoves.Green +1}
        });
    }
    let updateRed =()=>{
        
        console.log(`moves.Red=${moves.Red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,Red:prevMoves.Red +1}
        });
    }


    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.Blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.Yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves={moves.Green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves={moves.Red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>

            </div>
        </div>
    );
}
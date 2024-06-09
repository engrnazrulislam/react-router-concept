import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
 
export const AssetContext=createContext("Gold");
export const SpecialGiftContext=createContext(null);

const Grandpa = () => {
    const [money,setMoney]=useState(null);
    // const asset1="Diamond";
    // const asset2="Gold";
    // const asset3="Silver;
    return (
        <div style={{border:"2px solid purple",padding:"20px"}}>
        <h2>Grand Pa</h2>
        <button onClick={()=> setMoney(money+1000)}>Gift Money</button>
        <div style={{border:"1px solid red", padding:"20px",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"}}>
            <SpecialGiftContext.Provider value={money}>
            <AssetContext.Provider value="gold">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </AssetContext.Provider>
            </SpecialGiftContext.Provider>
        </div>
        </div>
    );
};

export default Grandpa;
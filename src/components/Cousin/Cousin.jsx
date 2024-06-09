import { useContext, useState } from "react";
import { AssetContext, SpecialGiftContext } from "../Grandpa/Grandpa";

const Cousin = ({cousinName}) => {
    const gift=useContext(AssetContext);
    const GiftMoney=useContext(SpecialGiftContext);
    // const {asset2, asset3}=asset;
    return (
        <div style={{border:"1px solid navy",padding:"20px"}}>
            <h2>{cousinName}</h2>
            <p>Has Gift: {gift}</p>
            <p>{GiftMoney}</p>
        </div>
    );
};

export default Cousin;
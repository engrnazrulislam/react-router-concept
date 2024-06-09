import { useContext } from "react";
import { SpecialGiftContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const giftMoney=useContext(SpecialGiftContext);
    return (
        <div style={{border:"1px solid orange",padding:"20px"}}>
        <h2>Sister</h2>
        <p>Has : {giftMoney}</p>           
        </div>
    );
};

export default Sister;
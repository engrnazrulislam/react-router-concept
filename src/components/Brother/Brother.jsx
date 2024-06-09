import { useContext } from "react";
import { SpecialGiftContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const specialGift=useContext(SpecialGiftContext);
    return (
        <div style={{border:"1px solid blue", padding:"20px"}}>
            <h2>Brother</h2>
            <p>Special Gift: {specialGift}</p>
        </div>
    );
};

export default Brother;
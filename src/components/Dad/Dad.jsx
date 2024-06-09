import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div style={{border:"2px solid red",padding:"20px"}}>
        <h2>Dad</h2>
        <div style={{border:"1px solid green",padding:"20px",display:"flex",gap:"20px"}}>
            <Brother></Brother>
            <Sister ></Sister>
        </div>
        </div>
    );
};

export default Dad;
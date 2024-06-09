import Cousin from "../Cousin/Cousin";
const Aunty = () => {
    return (
        <div style={{border:"2px solid blue",padding:"20px"}}>
            <h2>Aunty</h2>
            <div style={{border:"1px solid olive",padding:"20px",display:"flex",gap:"20px"}}>
                <Cousin cousinName={'Cousin-3'} ></Cousin>
                <Cousin cousinName={'Cousin-4'} ></Cousin>
            </div>
        </div>
    );
};

export default Aunty;
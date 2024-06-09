import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div style={{border:"2px solid green",padding:"20px"}}>
            <h2>Uncle</h2>
            <div style={{border:"1px solid olive",padding:"20px",display:"flex",gap:"20px"}}>
                <Cousin cousinName={'Cousin-1'} ></Cousin>
                <Cousin cousinName={'Cousin-2'} ></Cousin>
            </div>
        </div>
    );
};

export default Uncle;
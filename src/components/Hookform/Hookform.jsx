import useInputState from "../../hooks/useInputState";

const Hookform = () => {
    // const [name, handleNameChange]=useInputState('');
    const nameState=useInputState('');
    console.log(nameState);
    const handleSubmit=e=>{
        console.log('Form data', nameState.value);
        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;
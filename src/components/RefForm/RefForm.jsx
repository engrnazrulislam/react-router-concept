import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const handleRefFormSubmit=e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value);
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleRefFormSubmit}>
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input ref={emailRef} defaultValue={'nazrul.cmt12@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id=""/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;
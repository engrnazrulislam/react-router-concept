import { useState } from "react";

const Statefullform = () => {
    const [email, setEmail]=useState(null);
    const [name, setName]=useState('Md. Nazrul Islam');
    const [password, setPassword]=useState(null);
    const [error, setError]=useState('');
    const handleStatefullformSubmit=e=>{
        e.preventDefault();
        console.log(email);
        console.log(name);
        if(password.length<6){
            setError("Password Must be at Least 6 Character");
        }
        else{
            setError('');
            console.log(password);
        }
    }
    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handleNameChange=e=>{
        setName(e.target.value);
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleStatefullformSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Statefullform;
import { useState } from "react";
import { Link } from "react-router-dom";

function Reg() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setMessage]=useState('')
    function formhandle(e){
        e.preventDefault(e)
        const data={username,password}
        fetch('/api/reg',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===201){
                setMessage(data.message)
            }else{
                setMessage(data.message)
            }
        })
    }
    return (
        <sections id="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2>Register Here!!!</h2>
                        <p>{message}</p>
                        <form onSubmit={(e)=>{formhandle(e)}}>
                            <label>UserName/Email</label>
                            <input type="email" className="form-control"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <label>Password</label>
                            <input type="password" className="form-control"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                            <button className="btn btn-info form-control mt-2">Register</button>
                        </form>
                        
                        <div className="row register">
                            <div className="col-md-12 mt-3">
                                <p>Have Account? <Link to="/">Login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </sections>
    );
}

export default Reg;

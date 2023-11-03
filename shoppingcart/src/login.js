import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Login() {
    
    const [username, setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    let navigate=useNavigate()
    const{setLoginname}=useContext(Contextapi)
    function formhandle(e){
        e.preventDefault()
        const data={username,password}
        fetch('/api/logincheck',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===200){ 
                localStorage.setItem('loginname', data.apiData.username)
                setLoginname(localStorage.getItem('loginname'))
                if(data.apiData.username==='pawan@gmail.com'){
                    navigate('/dashboard')
                }else{
                    navigate('/usersproduct')
                }
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
                        <h2>Login Here!!!</h2>
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
                            
                            <button className="btn btn-info form-control mt-2">Login</button>
                            <div className="row">
                            <div className="col-md-6 mt-3 ">
                                <Link to="/forgot">Forgot Password?</Link>
                            </div>
                             </div>
                        </form>
                        
                        <div className="row register">
                            <div className="col-md-12 mt-3">
                                <p>Don't Have Account? <Link to="/reg">Register</Link></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </sections>
    );
}

export default Login;

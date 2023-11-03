import { useState } from "react";
import { Link } from "react-router-dom";

function Forgot() {
    const[email,setEmail]=useState('')
    function formhandle(e){
        e.preventDefault()
        
    }
    return (
        <sections id="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2>Forgot Password</h2>
                        <form onSubmit={(e)=>{formhandle(e)}}>
                            <label>UserName/Email</label>
                            <input type="text" className="form-control"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            
                            <button className="btn btn-info form-control mt-2">Send</button>
                        </form>
                        <div className="row register">
                            <div className="col-md-12 mt-3">
                                <p>Remember Password? <Link to="/">Login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </sections>
    );
}

export default Forgot;
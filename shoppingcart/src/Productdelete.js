import { useNavigate, useParams } from "react-router-dom";
import Left from "./left";
import { useState } from "react";

function Productdelete() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [message,setMessage]=useState('')
    fetch(`/api/productdelete/${id}`,{
        method:'DELETE'
    }).then((result)=>{return result.json()}).then((data)=>{
        if(data.status===200){
            navigate('/adminproduct')
        }else{
            setMessage(data.message)
        }
    })
    return ( 
        <section id="dashboard">
            
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-8">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Productdelete;
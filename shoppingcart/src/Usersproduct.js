import { useEffect, useState } from "react";
import Productstr from "./Productstr";

function Usersproduct() {
    const[product,setProduct]=useState([])
    const[message,setMessage]=useState('')
    useEffect(()=>{
        fetch('/api/instockproducts').then((result)=>{return result.json()}).then((data)=>{
            console.log(data)
            if(data.status===200){
                setProduct(data.apiData)
            }else{
                setMessage(data.message)
            }
        })
    },[])
    return ( 
        <section id="product">
        {product.map((result)=>(
            <Productstr key={result._id} products={result}/>
            // <h2>hhhh</h2>
        ))} 
        </section>
     );
}

export default Usersproduct;
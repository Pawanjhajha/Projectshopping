import { useState } from "react";
import Left from "./left";

function Productadd() {
    const [name,setName]=useState('')
    const [desc,setDesc]=useState('')
    const [price,setPrice]=useState('')
    const [qty,setQty]=useState('')
    const [img,setImg]=useState('')
    const [message,setMessage]=useState('')
    function handleimage(e){
        setImg(e.target.files[0])
        
    }

    function formhandle(e){
        e.preventDefault()
        // const data={name,desc,price,qty}
        let data=new FormData()
        data.append('name',name)
        data.append('desc',desc)
        data.append('price',price)
        data.append('qty',qty)
        data.append('img',img)

        fetch('/api/addproduct',{
            method:'POST',
            body:data

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
        <section id="dashboard">
            
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-8">
                        <h2 className="text-center">Product Add Here</h2>
                        { <p>{message}</p> }
                        <form onSubmit={(e)=>{formhandle(e)}}>
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            ></input>
                            <label>Product img</label>
                            <input type="file" className="form-control"
                            onChange={(e)=>{handleimage(e)}}
                            ></input>
                            <label>Product Description</label>
                            <input type="text" className="form-control"
                            value={desc}
                            onChange={(e)=>{setDesc(e.target.value)}}
                            ></input>
                           
                            <label>Product Price</label>
                            <input type="text" className="form-control"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                            ></input>
                            <label>Product Quantity</label>
                            <input type="number" className="form-control"
                            value={qty}
                            onChange={(e)=>{setQty(e.target.value)}}
                            ></input>
                            <button type="submit" className="form-control btn btn-success mt-2"> Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Productadd;
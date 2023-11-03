import { useParams } from "react-router-dom";
import Left from "./left";
import { useEffect, useState } from "react";

function Productupdate() {
    const {id}=useParams()
    const[name, setName]=useState('')
    const[desc, setDesc]=useState('')
    const[qty, setQty]=useState('')
    const[price, setPrice]=useState('')
    const[status, setStatus]=useState('')
    const[message,setMessage]=useState('')
    const[img,setImg]=useState('')
    useEffect(()=>{
        fetch(`/api/singleproduct/${id}`).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===200){
                setName(data.apiData.name)
                setDesc(data.apiData.desc)
                setQty(data.apiData.qty)
                setPrice(data.apiData.price)
                setStatus(data.apiData.status)

            }else{
                setMessage(data.message)
            }
        })
    },[])
    function handleimage(e){
        setImg(e.target.files[0])
    }
    function formhandle(e){
        e.preventDefault()
        // console.log(name,desc,price,qty,status)
        let data = new FormData()
        data.append('name',name)
        data.append('desc',desc)
        data.append('price',price)
        data.append('qty',qty)
        data.append('status',status)
        data.append('img',img)
        console.log(data.name)
        fetch(`/api/productupdate/${id}`,{
            method:'PUT',
            body:data
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data===200){
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
                        <h2>Product Add Here {id}</h2>
                        {message?
                        <p className="alert alert-success text-center">{message}</p>
                        :<></>
                        }
                        <form onSubmit={(e)=>{formhandle(e)}}>
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            ></input>
                            <label>Product Description</label>
                            <input type="text" className="form-control"
                            value={desc}
                            onChange={(e)=>{setDesc(e.target.value)}}
                            ></input>
                            <label>Product Price</label>
                            <input type="number" className="form-control"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                            ></input>
                            <label>Product Quantity</label>
                            <input type="number" className="form-control"
                            value={qty}
                            onChange={(e)=>{setQty(e.target.value)}}
                            ></input>
                            <label>Status</label>
                            <select className="form-select" value={status}
                            onChange={(e)=>{setStatus(e.target.value)}}
                            >
                                <option value="OUT-STOCK">Out-Stock</option>
                                <option value="IN-STOCK">In-Stock</option>
                            </select>
                            <label>Product Img</label>
                            <input type="file" className="form-control"
                            onChange={(e)=>{handleimage(e)}}
                            ></input>
                            <button className="form-control btn btn-warning mt-2">Update</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Productupdate;
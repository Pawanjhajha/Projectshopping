import { Link } from "react-router-dom";
import Left from "./left";
import { useEffect, useState,  } from "react";

function Adminproduct() {
   const[products,setProducts]=useState([]) 
    useEffect(()=>{
        fetch('/api/allproduct').then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===200){
                setProducts(data.apiData)
            }else{

            }
        })
    },[])
    return ( 
        <section id="dashboard">
            
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2 className="text-center mt-2">Porduct Management</h2>
                        <Link to="/adminproductadd"><button className="btn btn-success form-control">Add Product</button></Link>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Product Status</th>
                                    <th>Action</th>
                                    <th>Action 2</th>
                                </tr>
                            </thead>
                            <tbody>
                               {products.map((result,key)=>(
                                 <tr>
                                 <td>{key+1}</td>
                                 <td>{result.name}</td>
                                 <td><img src={`productimages/${result.img}`} alt=""/></td>
                                 <td>{result.desc}</td>
                                 <td>{result.price}</td>
                                 <td>{result.qty}</td>
                                 <td>{result.status}</td>
                                 <td><Link to={`/productupdate/${result._id}`}>Update</Link></td>
                                 <td><Link to={`/productdelete/${result._id}`}>Delete</Link></td>
                                 </tr>
                                 
                               ))}
                               
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Adminproduct;
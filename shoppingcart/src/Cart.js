import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";
import { Link } from "react-router-dom";



function Cart() {
    const { cart, setCart,loginname } = useContext(Contextapi)
    const [products, setProduct] = useState([])
    let totalamount=0
    useEffect(() => {
        if(!cart.item){
            return
        }
        fetch('/api/cartproducts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: Object.keys(cart.item) })
        }).then((result) => { return result.json() }).then((data) => {
            // console.log(data)
            if (data.status === 200) {
                setProduct(data.apiData)
            } else {

            }
        })
    }, [cart])

    function handlequantity(id) {
        return cart.item[id]
    }
    function handleincreement(e, id, qty) {
        let currentqty = handlequantity(id)
        if (qty === currentqty) {
            alert('Reached to Max Qty')
            return
        }
        let _cart = { ...cart }
        _cart.item[id] = currentqty + 1
        _cart.totalItem += 1
        setCart(_cart)

    }
    function handledicrement(e, id) {
        let currentqty = handlequantity(id)
        if (currentqty === 1) {
            return
        }
        let _cart = { ...cart }
        _cart.item[id] = currentqty - 1
        _cart.totalItem -= 1
        setCart(_cart)

    }
    function handleprice(id,price) {
        let currentprice= handlequantity(id)*price
        totalamount +=currentprice
        return currentprice
    }

    function handlecheckout(e){
        fetch(`/api/cart/${loginname}`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(cart)
        })
    }
    function handledelete(e,id){
        let currentqty =handlequantity(id)
        let _cart = {...cart}
        delete _cart.item[id]
        _cart.totalItem -= currentqty
        setCart(_cart)
        products.filter((product)=>{
            return product._id !==id
        })
    }

    return (
              
        <section id="cartdata">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    {products.length?
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((result, key) => (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{result.name}</td>
                                        <td><img src={`productimages/${products.img}`} alt="" /></td>
                                        <td><button onClick={(e) => { handledicrement(e, result._id) }}>-</button> {handlequantity(result._id)} <button onClick={(e) => { handleincreement(e, result._id, result.qty) }}>+</button></td>
                                        <td>{handleprice(result._id,result.price)}</td>
                                        <td><button className="btn btn-danger" onClick={(e)=>{handledelete(e,result._id)}}>Delete</button></td>
                                    </tr>
                                ))}
                                    <tr>
                                        <td colSpan={6} className="text-center"><h4>Total Amount : {totalamount}</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={6} className="text-center"><Link to='/checkout'><button className="btn btn-success form-control" onClick={(e)=>{handlecheckout(e)}}>CheckOut</button></Link></td>
                                    </tr>
                            </tbody>
                        </table>
                        :
                        <img   src="emptycart.jpg" alt=""/>
                        }
                    </div>
                </div>
            </div>
        </section>
        
        
        
    );
}

export default Cart;
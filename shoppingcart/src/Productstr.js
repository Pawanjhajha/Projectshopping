import { useContext } from "react";
import { Contextapi } from "./Contextapi";

function Productstr(props) {
    const{products}=props
    const {cart,setCart}=useContext(Contextapi)
    let _cart={...cart}
    function handlecart(e,p){
        console.log(p._id)
        if(!_cart.item){
            _cart.item={}
        }
        if(!_cart.item[p._id]){
            _cart.item[p._id]=1
        }else{
            _cart.item[p._id]+=1
        }
        if(!_cart.totalItem){
            _cart.totalItem=1 
        }else{
            _cart.totalItem +=1
        }
        setCart(_cart)
        console.log(cart)
    }
    return (
        <section id="productstr">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card" style={{width:'18rem'}}>
                            <img src={`productimages/${products.img}`} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{products.name}</h5>
                                    <h5 className="card-title text-center">{products.price} Rs.</h5>
                                    <p className="card-text text-justify">{products.desc}</p>
                                    <button className="btn btn-warning ms-2" onClick={(e)=>{handlecart(e,products)}}>Add To Cart</button>
                                    <button className="btn btn-info ms-2">More Details</button>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Productstr;
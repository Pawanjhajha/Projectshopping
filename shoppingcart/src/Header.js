import { useContext } from "react";
import { Contextapi } from "./Contextapi";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const {loginname,setLoginname,cart}=useContext(Contextapi)
    let navigate=useNavigate()
    function handlelogout(e){
        setLoginname(localStorage.removeItem('loginname'))
        navigate('/')
    }
    return (  
        <>
         {loginname?
        <section id="header">
            
           
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><h2>Welcome {loginname}</h2></div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={(e)=>{handlelogout(e)}}> Logout</button>
                        <Link to='/cart'><button className="btn btn-warning me-2">Cart-{!cart.totalItem?0:cart.totalItem}</button></Link>
                        <Link to='/usersproduct'><button className="btn btn-success me-2">Products</button></Link>
                    </div>
                </div>
            </div>
           
        </section>
         :<></>
        }
        </>
    );
}

export default Header;
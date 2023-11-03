import { useContext } from "react";
import { Contextapi } from "./Contextapi";

function Footer() {
    const {loginname,setLoginname}=useContext(Contextapi)
    return (
        <section id="footer">
             {loginname?
        <div className="container">
            <div className="row">
                <div className="col-md-12"> <h2>Copyright &copy; Shopping Cart</h2></div>
            </div>
        </div>
         :
         <></>
         }
    </section>
      );
}

export default Footer;
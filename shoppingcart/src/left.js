import { Link } from "react-router-dom";

function Left() {
    return ( 
        <div className="col-md-3">
    <Link to="/adminproduct"> <button className="btn btn-info form-control mt-3">Product Management</button></Link>
    <Link to="/usermanagement"> <button className="btn btn-info form-control mt-3">User Management</button></Link>
</div>
     );
}

export default Left;

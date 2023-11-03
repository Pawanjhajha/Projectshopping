import { useState } from "react";
import Left from "./left";

function Usermanagement() {
    const [userdata, setUserdata] = useState([])
    fetch('/api/usershow').then((result) => { return result.json() }).then((data) => {
        if (data.status === 200) {
            setUserdata(data.apiData)
        } else {

        }
    })

    return (
        <section id="dashboard">

            <div className="container">
                <div className="row">
                    <Left />
                    <div className="col-md-8">
                        <h2>User Management</h2>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>UserName</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile</th>

                                </tr>
                            </thead>
                            <tbody>
                                {userdata.map((result,key) => (
                                    <tr>
                                        <td>{key+1}</td>
                                        <td>{result.username}</td>
                                        <td>{}</td>
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

export default Usermanagement;
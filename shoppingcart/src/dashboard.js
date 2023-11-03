import Left from "./left";

function Dashboard() {
    return ( 
        <section id="dashboard">
            
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-8">right</div>
                </div>
            </div>
        </section>
     );
}

export default Dashboard;
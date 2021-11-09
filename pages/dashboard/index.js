import {useState, useEffect} from "react";

function Dashboard(){
  
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    useEffect(()=>{
        async function fetchDashboardData(){
            const response = await fetch("http://localhost:4000/dashboard");
            const dashboard = await response.json();
            setData(dashboard);
            setLoading(true);
        }
        fetchDashboardData()
    },[])


    if(loading === false){
        return(
            <h3>Loading...</h3>
        )
    }


    return(
        <div>
       
          <h2>{data.post}</h2>
          <h2>{data.Likes}</h2>
          <h2>{data.followers}</h2>
          <h2>{data.following}</h2>
        </div>
    )
}

export default Dashboard;
import useSWR from "swr";

  
const fetcher = async ()=>{
    const response = await fetch("http://localhost:4000/dashboard");
   const data = await response.json();
   return data;
}

function SWR(){

const { data, error} = useSWR("dashboard", fetcher)

if(error){
    return <div>failed to load</div>
}

if(!data){
    return <div>Loading...</div>
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

export default SWR;
import React, {useState,useEffect } from "react";

function DataFetcher(){
    const [data , setData ]= useState([]);
    const[loading , setLoading ] = useState(true);

    useEffect(() => {
        // kisi website se data lekar aa arha hai
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(data=>{
        // according to data function ko set kar raha hai
        setData(data);
        setLoading(false);
      });
    
    }, []);
    // eg of varition 1 run on only first render phle render me data ko fecth api callse function ko update karke uske badd isko kam  khatm
    return (
        <div>
            {loading ? (
                <h1>Loading....</h1>
                // agar loading ki value ture to ui per loading lkiha aayaga nahi to jo data load hoke aaya wo print ho jjyega
            ): (
                <ul>
                    {data.map(post=>(
                       <li key ={post.id}>{post.title}</li> 
                    ))}
                </ul>

            )}
        </div>
    )
    
}
export default DataFetcher;
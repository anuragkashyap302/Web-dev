import UserCard from "./components/usercard"
import"./App.css"


function App() {

  return (
    // usercard apne se bana liye src me jake ab yaha app me import kar diye ab kcch 3 card chiye 3 baar kikh do ho gaya
    <div className="container">
        <UserCard name="anurag" style={{"border-radius":"10px"}}/>
        <UserCard name="krishna" style={{"border-radius":"10px"}}/>
        <UserCard name="raunak" style={{"border-radius":"10px"}}/>
        {/* tum yaha se jo bhi pass karoge wo useercard me props ke tarh recive hoga and usko hum ui pe print kar sakte hai
         like img , name , style tag  ,etc img ko pahle yaha improt karna padta hai phir send kar do */}

     
    </div>
  )
}

export default App

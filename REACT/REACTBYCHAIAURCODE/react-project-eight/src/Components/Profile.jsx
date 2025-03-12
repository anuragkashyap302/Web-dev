import React,{useContext} from 'react'
import UserContext from '../Context/User'
function Profile() {
    // ab profile dikane ke liye data lena padega tumko bhej to tum diye ho login componet ke throuhg
    // ab pachue wo userconstxt me though usecoontext hook now you can take from thre
    const {user} = useContext(UserContext)
    if(!user) return <div>Login karle Bhosrike</div>
    return <div>AAO AAO DOGLE KI AULADD {user.username}</div>
  
}

export default Profile
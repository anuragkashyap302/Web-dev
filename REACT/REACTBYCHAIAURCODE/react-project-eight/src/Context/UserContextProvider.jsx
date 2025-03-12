import React from "react";
import UserContext from "./User";
const UserContextProvider = ({children})=>{
  const [user , setUser] = React.useState(null);
  return(
    // usercontext ko provide kar diye wo chixe jo hmko niccche kisi component me bhejna hai
    // example ek card me do cmponet hai div left and right to data srif right ko chilye to wahi bhej do
    <UserContext.Provider value={{user , setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

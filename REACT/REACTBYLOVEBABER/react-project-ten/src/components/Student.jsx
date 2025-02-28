import React from 'react'
import { useParams } from 'react-router-dom'
const Student = () => {
    const {id}= useParams();
  return (
    <div >
        {/* jo naya route aaya hai id ke rup me id ko recive karke useParams ke through print kar do  jab ibhi ye search hoga to parms me searched id print ho jayga
         like if you search student/abcd  then abcd will print*/}
      params:{id};
    </div>
  )
}

export default Student

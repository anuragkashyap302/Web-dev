import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting }, // buht sare flag pressent hote hai for diffrent state jisko use karke tum bsut kuch change kar ssssssakete ho eg issumbtting
  } = useForm();
    async function onSubmit(data){
    //api call ko simulate kar do jisse ek time spent ke ander wo bar bar sumbit na ppaye
    await  new Promise((resolve)=> setTimeout(resolve ,5000));
       console.log("sumbtting form " ,data);
       // or you can give alret also as your wish
   }
  return (
   <form  onSubmit={handleSubmit(onSubmit)}>
    
    <div>
      {/* input flied ko ab form se connect bhi karna hoga by react-hokk frm using register  jisie wo tarck rackh sake*/}
      <label >First Name: </label>
      {/* tum apne marzi se valiladition bhi laga sakte ho ki input type kaisa hona chihiye jaab tak naaam nhi dalga spcfic validation ka tab tak sumbit nahi hoga */}
      <input {...register('firstName' ,{ required: true, minLength:{value:3,message:'min length atleast 3'}
         , maxLength:20 })}  />
         {errors.firstName && <p>{errors.firstName.message}</p>}
      {/* you can set many conditon go to documantation and read  and put messaage also */}
    </div>
    <br />
    <div>
      <label >Middle Name: </label>
      <input {...register('middleName')} />
    </div>
    <br />
    <div>
      <label >Last Name: </label>
      <input {...register('lastName')} />
    </div>
    <br />
    <input type= 'submit' disabled ={isSubmitting} value={isSubmitting ? "sumbit ho raha hai dabana mat": "sumbit"}/>
    {/* jaab bhi issubitinh true ho tab subit button ko disable kar dena */}
   </form>
  )
}

export default App

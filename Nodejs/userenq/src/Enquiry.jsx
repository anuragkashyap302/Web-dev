import React from 'react'
import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
function Enquiry() {
  let saveEnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry saved successfully")
    
  }
  return (
    <div>
        <h1 className='text-[40px] text-center py-6 font-bold'>User Equiry</h1>
        <div className='grid grid-cols-[30%_auto] gap-10'>
            <div className='bg-gray-200 p-4'>
                <h2 className='text-[20px] font-bold'>Enquriy Form</h2>
            <form action="" onSubmit={saveEnquiry}>
              <div className='py-3'>
              <Label htmlFor="name" value=" Your Name" />
              <TextInput  type="text" name='yourname' placeholder="Enter your name" required />
              
              </div>
              <div className='py-3'>
              <Label htmlFor="email" value=" Your email" />
              <TextInput  type="email" name='email' placeholder="Enter your email" required />
              
              </div>
              <div className='py-3'>
              <Label htmlFor="phone" value=" Your Phone" />
              <TextInput  type="text" name='phone' placeholder="Enter your Phone" required />
              </div>
              <div className='py-3'>
              <Label htmlFor="message" value=" Your Message" />
              <Textarea  placeholder="Leave a comment..." name='message' required rows={4} />
              </div>
              <div className='py-3'>
              <Button type="submit" className='w-[100%]'>Register new account</Button>
                
              </div>

            </form>
            </div>
            {/* rigth side  ka ek component niche baneke yaha call kaar diye for easy to hadnle*/}
            
           <EnquiryList/>
        </div>

    </div>
  )
}

 function EnquiryList(){
  return(
    <div className='bg-gray-200 p-4 mb-4'>
    <h2 className='text-[20px] font-bold mb-4'>Enquriy List</h2>
    <div className="overflow-x-auto">
<Table>
<TableHead>
  <TableRow>
    <TableHeadCell>SR.NO</TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Email</TableHeadCell>
    <TableHeadCell>Phone</TableHeadCell>
    <TableHeadCell>Message</TableHeadCell>
    <TableHeadCell> <span>Edit</span> </TableHeadCell>
    <TableHeadCell><span >Delete</span> </TableHeadCell>
  </TableRow>
</TableHead>
<TableBody className="divide-y">
  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      1
    </TableCell>
    <TableCell>Anurag</TableCell>
    <TableCell>anu@gmail.com</TableCell>
    <TableCell>878457938</TableCell>
    <TableCell>hello</TableCell>
    <TableCell>
      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Edit
      </a>
    </TableCell>
    <TableCell>
      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Delete
      </a>
    </TableCell>
  </TableRow>
</TableBody>
</Table>
</div>
    </div>
  )
 }

export default Enquiry
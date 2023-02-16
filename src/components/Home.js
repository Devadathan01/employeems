import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import {Link , useNavigate} from 'react-router-dom'
import { FaEdit, FaTrash , FaUserPlus } from "react-icons/fa";
import{Button} from 'react-bootstrap'

function Home() {
    const history=useNavigate();
    const handleDelete=(id)=>{
        alert('Are You sure you want to delete?')
        console.log(Employee.map((item)=>item.id).indexOf(id));//index of array
        let index=Employee.map((item)=>item.id).indexOf(id)
        console.log(index);
        Employee.splice(index,1) //remove last item from the array
        console.log(Employee);
        history('/') //refresh
    }

    const handleEdit=(id,empname,age,designation,salary)=>{
        localStorage.setItem("ID",id)
        localStorage.setItem("NAME",empname)
        localStorage.setItem("AGE",age)
        localStorage.setItem("DESIGNATION",designation)
        localStorage.setItem("SALARY",JSON.stringify(salary))
    }

  return (
    <div>

<h1 className='text-center mt-4'>Employee Management System</h1>
<p className='p-4'>
An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>

<Link to={'/add'}>
<Button className='btn btn-success ms-5'>Add <FaUserPlus/></Button>
</Link>

         <Table striped bordered hover variant="primary" style={{
            margin:"30px",
           
            border:"3px solid lightslategray"
         }}>
      <thead>
        <tr>
            <th>ID</th>
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
        {
            Employee && Employee.length>0 ?
            
            Employee.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.empname}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                        <Link to={'/edit'}>
                        <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button> 
                        </Link>


                    <Button onClick={()=>handleDelete(item.id)} className='m-2 btn btn-danger'><FaTrash/></Button></td>
                    
                </tr>
            ))
            :"No data Available"
        }
        
      </tbody>
    </Table>


    </div>
  )
}

export default Home
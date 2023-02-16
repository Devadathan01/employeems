import React from 'react'
import uuid from 'react-uuid';
import Employee from './Employee';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function Add() {
  const [id,setId]=useState('')
const [empname,setEmpname]=useState('')
const [age,setAge]=useState('')
const [designation,setDesignation]=useState('')
const [salary,setSalary]=useState(0)


let history=useNavigate()
  const handleData=(e)=>{
e.preventDefault()
let ids=uuid()
console.log(ids);//unique id
let uniqueid=ids.slice(0,8)
Employee.push({
  id:uniqueid,
  empname:empname,
  age:age,
  designation:designation,
  salary:salary 

})
history('/')

  }
  return (
    <>

<h1 className='text-center mt-5'>Add Employee Details</h1>
    <p className='p-4'>
An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>

<Row>
<Col md={5}>
<img style={{
    width:"500px"
}} src='https://icons.veryicon.com/png/o/business/management-of-migrant-workers/icon-employee-management.png'/>
</Col>


<Col md={6}>

<Form className='border border-4 p-5'>
      <Form.Group className="mb-3">
        <h3 className='text-center'>Update Your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" 
        // value={empname} 
        onChange={(e)=>setEmpname(e.target.value)} required  
        />  
      </Form.Group>


      <Form.Group className="mb-3">

        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Age"
        //  value={age} 
        onChange={(e)=>setAge(e.target.value)} required
         />  
      </Form.Group>




      <Form.Group className="mb-3">

        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation"
        //  value={designation} 
        onChange={(e)=>setDesignation(e.target.value)} required
         />  
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your Salary" 
        // value={salary} 
        onChange={(e)=>setSalary(e.target.value)} required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
      <Button variant="success" type="submit" onClick={(e)=>handleData(e)}>
        Add
      </Button>
    </Form>


</Col>

</Row>
    </>


   
  )
}

export default Add
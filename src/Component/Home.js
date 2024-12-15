import React from 'react'
import './home.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';




export default function Home() {

  
  return (

   
   <div>
    {/* Header Section */}
   <div className='header'>
     <h1 className='header h1'>Create Trainee </h1>
   </div>



   {/* Form Section */}
   <div className='container'>
     <form>
       

      <label for="inputName" class="form-label">Name</label>
      <input type="text" id="inputPassword5" class="form-control" />
   
      <label for="inputNumber" class="form-label">Mobile</label>
      <input type="text" class="form-control" />

      <label for="inputNIC" class="form-label">NIC</label>
      <input type="text" class="form-control" />


      <label for="inputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" />

      <label for="inputAddress" class="form-label">Home Address/City</label>
      <input type="text" class="form-control" />

      <label for="inputCity" class="form-label">Training Start Date</label>
      <input type="date" class="form-control" />

      <label for="inputCity" class="form-label">Training End Date</label>
      <input type="date" class="form-control" />

      <label for="inputCity" class="form-label">Institute</label>
      <input type="text" class="form-control" />

      <label for="inputCity" class="form-label">Languages known</label>
      <input type="text" class="form-control" />

    

    {/* DropdownSection */}
      
    <div class="dropdown">   
     <DropdownButton id="dropdown-basic-button" title="Field of Specialization">
      <Dropdown.Item href="#/action-1"> Python</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Java</Dropdown.Item>
      <Dropdown.Item href="#/action-3">C#</Dropdown.Item>
      <Dropdown.Item href="#/action-4">React</Dropdown.Item>
      <Dropdown.Item href="#/action-5">DevOps</Dropdown.Item>
      <Dropdown.Item href="#/action-6">MERN</Dropdown.Item>
      <Dropdown.Item href="#/action-7">UI/UX</Dropdown.Item>
      <Dropdown.Item href="#/action-8">QA</Dropdown.Item>
      <Dropdown.Item href="#/action-9">AI</Dropdown.Item>

     </DropdownButton>
      

     <DropdownButton id="dropdown-basic-button" title="Supervisor">
      <Dropdown.Item href="#/action-1"> Name 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Name 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Name 3</Dropdown.Item>
      <Dropdown.Item href="#/action-4">Name 4</Dropdown.Item>
      <Dropdown.Item href="#/action-5">Name 5 </Dropdown.Item>
      <Dropdown.Item href="#/action-6">Name 6</Dropdown.Item>
      <Dropdown.Item href="#/action-7">Name 7</Dropdown.Item>
      <Dropdown.Item href="#/action-8">Name 8</Dropdown.Item>
      
     </DropdownButton>
     
     </div> 
           

      {/* Assigned Work Section */}

       <label for="exampleFormControlTextarea1" class="form-label">Assigned Work</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
       
       <label for="inputCity" class="form-label">Target Date</label>
       <input type="date" class="form-control" />
       


      {/* Create Button , open window 1*/}
       
      <div class="btn"> 
      <Button variant="outline-secondary">Create</Button>
       </div>
      

      

     </form>

    {/*footer*/}


    

   </div>

   <div >
        <h1 style={{ fontSize: '12px',textAlign: 'center'}}>© 2024 - Digital Platform</h1>.

       </div>
 </div>




);
}


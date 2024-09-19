import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Footer';
import Footer from './Footer';
import NavBar from './NavBar';


function App() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
   axios.get('http://localhost:3001/getUsers')
   .then(users => setUsers(users.data))
   .catch(err => console.log(err))

  },[])

  return (
    <div>
      <NavBar/>
    <div className='container'>
      <div>
      <table className='table table table-warning table-striped '>
        <thead>
          <tr>
            <th>
              Student_Id
            </th>
            <th>
             First_Name
            </th>
            <th>
              Last_Name
            </th>
            <th>
             Gender
            </th>
            <th>
              Email
            </th>
            <th>
              Age
            </th>
            <th>
              Mobile_No
            </th>
          <th>
            Roll_No
          </th>
          <th>
            PresentDay
          </th>
          <th>
            AbsentDay
          </th>
          </tr>
        </thead>
       <tbody>{
          
           users.map((user,key) => (
             <tr key={user.student_id}>
                <td >{user.student_id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.mobile_no}</td>
                <td>{user.rollno}</td>
                <td>{user.Attendence.day_present}</td>
                <td>{user.Attendence.day_absent}</td>
             
            </tr>
           ))
        }
        </tbody>
      </table>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App



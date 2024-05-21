import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [data])

  const getDelete= function(id){
    axios.delete('http://localhost:8000/users/'+id)
    .then(res=>console.log(res))
  }
  
  return (
    <div>
      <button className='add'>Add</button>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>img</th>
          <th>ad</th>
          <th>About</th>
          <th>Money</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map(element=>{
          return(
            <tr key={element.id}>
              <td>{element.id}</td>
              <td><img src={element.img} alt="" /></td>
              <td>{element.Ad}</td>
              <td>{element.About}</td>
              <td>{element.Money}</td>
              <td><button onClick={()=>getDelete(element.id)}>Delete</button></td>
              <td><button>Edit</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}



export default App

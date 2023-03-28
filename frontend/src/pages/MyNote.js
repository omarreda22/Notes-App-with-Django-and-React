import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const MyNote = () => {
  let {authToken, logoutUser} = useContext(AuthContext)
  let {id} = useParams()
  
  let [note, setNote] = useState(null)
  let [error, setError] = useState(null)

  useEffect(()=>{
    getNote()
  }, [id])

  let getNote = async()=>{
    let response = await fetch(`http://localhost:8000/api/note/${id}`,{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      }
    })
    let data = await response.json()
    if (response.status === 200){
      setNote(data)
    }else{
      setError(response.statusText)
    }
  }
  console.log(error)
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>Back</Link>
        </h3>
      </div>
      {
        error ?
        <h1 className='error'>{error}</h1>
        :
        <textarea value={note?.body}>
          
        </textarea>
      }
    </div>
  )
}

export default MyNote

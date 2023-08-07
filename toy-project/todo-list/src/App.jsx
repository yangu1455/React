import { useState, useEffect } from 'react'
import List from "./List";
import Alert from "./Alert";
import './App.css'

function App() {
  // 품목 이름
  const [name, setName] = useState('');
  // 품목 list
  const [list, setList] = useState([]);
  // 수정 상태인지 아닌지
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      // display alert
  
    }
    else if(name && isEditing){
      // deal with edit

    }
    else{
      // show alert
      const newItem = { id: new Date().getTime().toString(), title:name };
      setList([...list, newItem]);
      setName('')
    }
  }


  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className='clear-btn'>clear items</button>
        </div>
      )}
    </section>
  )
}

export default App

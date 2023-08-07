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
  const [alert, setAlert] = useState({ show: false, msg: '', type: '', });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name){
      // display alert
      showAlert(true, '할 일을 입력해주세요', 'danger')
    }
    else if (name && isEditing){
      // deal with edit

    }
    else {
      // show alert
      showAlert(true, '할 일이 추가되었습니다!', 'success')
      const newItem = { id: new Date().getTime().toString(), title:name };
      setList([...list, newItem]);
      setName('')
    }
  }
  
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  const clearList = () => {
    showAlert(true, '전부 삭제되었습니다', 'danger')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, '할 일이 삭제되었습니다', 'danger')
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
        <h3>To Do List</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='인프런 13강 다시 듣기' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? '수정' : '추가'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem}/>
          <button className='clear-btn' onClick={clearList}>전부 삭제</button>
        </div>
      )}
    </section>
  )
}

export default App

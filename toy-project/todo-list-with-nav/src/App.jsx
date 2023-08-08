import { useState, useEffect } from 'react'
import List from "./List";
import Alert from "./Alert";
import './App.css'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list){
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return []
  }
}

function App() {
  // 품목 이름
  const [name, setName] = useState('');
  // 품목 list
  const [list, setList] = useState(getLocalStorage());
  // 수정 상태인지 아닌지
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '', });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name){
      // display alert (값이 입력되지 않았을 때)
      showAlert(true, '할 일을 입력해주세요', 'danger')
    }
    else if (name && isEditing){
      // deal with edit (수정~~)
      setList(
        list.map((item) => {
          if(item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, '할 일이 수정되었습니다', 'success')
    }
    else {
      // show alert (입력된 값이 있을 때)
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

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>To Do List</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='ex. 웹 디벨로퍼 13, 14강 다시 듣기' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? '수정' : '추가'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearList}>전체 삭제</button>
        </div>
      )}
    </section>
  )
}

export default App

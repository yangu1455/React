import React from 'react'

function List() {

  const [newName, setNewName] = useState("");
  const [personList, setPersonList] = useState([]);

  const addPerson = () => {
    // input 창을 비워주기
    setNewName('');
  
    // input 창에 입력한 값을 배열에 추가하기
    setPersonList([
      ...personList,  
      {
        id: nextId++,
        name: newName,
      },
    ]);
  }


  return (
    <>
      <h1>떠든 사람:</h1>
      <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
      <button onClick={addPerson}>추가</button>
      <ul>
        {personList.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  )
}

export default List
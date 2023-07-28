import React from 'react'

function List() {

  const [newName, setNewName] = useState("");

  return (
    <>
      <h1>떠든 사람:</h1>
      <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
      <button>추가</button>
    </>
  )
}

export default List
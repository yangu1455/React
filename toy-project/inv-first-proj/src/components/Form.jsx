import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "형원",
    lastName: "채",
    email: "coenffl@hanmail.net",
  });

  function handleFirstNameChange(e) {
    // const newObject = {
    //   ...person,
    //   firstName: e.target.value,
    // };
    // setPerson(newObject);

    // 위의 코드와 같음
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        이름:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        성:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        이메일 주소:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
    </div>
  )




}
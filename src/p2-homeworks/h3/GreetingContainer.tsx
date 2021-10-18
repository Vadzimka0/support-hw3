import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    if (!text || text[0] === ' ') {
      setError('error: please enter correct data');
      setName('');
    } else {
      setName(text);
      setError('');
    }
  }

  const addUser = () => {
    if (name) {
      alert(`Hello ${name} !`);
      addUserCallback(name);
      setName('');
    }
  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer

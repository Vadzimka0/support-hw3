import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {
  const inputClass = `${s.input} ${error ? s.error : s.error_none}`

  return (
    <div className={s.hw3}>

      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <button onClick={addUser} className={s.btn_add} disabled={!name}>add</button>
      <span>{totalUsers}</span>
      <div className={s.msg_position}>{error}</div>

    </div>
  )
}

export default Greeting

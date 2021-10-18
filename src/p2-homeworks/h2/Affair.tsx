import React from 'react'
import c from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }

  return (
    <div className={c.row}>
      <div className={c.name}>{props.affair.name}</div>
      <div className={c.priority}>{props.affair.priority}</div>
      <button className={c.btnDelete} onClick={deleteCallback}>delete</button>
    </div>
  )
}

export default Affair

import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: (f: FilterType) => void
  deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {props.setFilter('all');}
  const setHigh = () => {props.setFilter('high');}
  const setMiddle = () => {props.setFilter('middle');}
  const setLow = () => {props.setFilter('low');}

  return (
    <div className={c.hw2}>

      {mappedAffairs}

      <button className={c.btnSort} onClick={setAll}>All</button>
      <button className={c.btnSort} onClick={setHigh}>High</button>
      <button className={c.btnSort} onClick={setMiddle}>Middle</button>
      <button className={c.btnSort} onClick={setLow}>Low</button>
    </div>
  )
}

export default Affairs

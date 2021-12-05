import React, {useState} from 'react'
import s from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(20)
  const [value2, setValue2] = useState(80)

  const onChangeRangeHandle = (array: number[]) => {
    setValue1(array[0]);
    setValue2(array[1]);
  };

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.row}>

        <span className={s.digit}>{value1}</span>

        <SuperRange
          onChangeRange={(val) => setValue1(val)}
          value={value1}
          // сделать так чтоб value1 изменялось
        />

      </div>

      <div className={s.row}>
        <span className={s.digit}>{value1}</span>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={onChangeRangeHandle}
          // сделать так чтоб value1 и value2 изменялось
        />
        <span className={s.digit}>{value2}</span>
      </div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11

import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    // stop
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      // setDate
    }, 1000)
    console.log(id)
    setTimerId(id)
  }

  const onMouseEnter = () => setShow(true)
  const onMouseLeave = () => setShow(false)

  const stringTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  const stringDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  return (
    <div>
      <div style={{minHeight: '45px'}}>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>

        {show && (
          <div>
            {stringDate}
          </div>
        )}
      </div>

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  )
}

export default Clock

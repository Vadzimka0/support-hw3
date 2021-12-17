import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import React, {useState} from "react";
import axios from "axios"

export function HW13() {
  return (
    <>
      <div>homeworks 13</div>
      <RequestApi/>
    </>
  );
}

type ResponseType = {
  errorText: string
  info: string
  yourBody?: {
    success: boolean
  },
  yourQuery?: {}
}

export function RequestApi() {

  const [checked, setChecked] = useState(true)
  const [response, setResponse] = useState<ResponseType>({errorText: "", info: ""})

  const getResponse = (checked: boolean) => {
    axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {
      "success": checked
    }).then((res) => {
      setResponse(res.data) //setResponse(res.data.info)
    }).catch((errorText) => {
      // debugger
      setResponse(errorText.response.data) //setResponse(errorText.response.data.info)
    })

  };

  return (
    <>
      <div style={{display: 'flex'}}>
        <SuperButton onClick={() => getResponse(checked)}>click</SuperButton>
        <SuperCheckbox
          checked={checked}
          onChangeChecked={setChecked}
        />
      </div>
      <div style={{minHeight: '50px'}}>
        <div>{response.errorText}</div>
        <div>{response.info}</div>
      </div>
      <hr/>
    </>
  );
}
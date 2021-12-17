import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {hwAPI, ResponseType} from "./api";

export function RequestApi() {

  const [checked, setChecked] = useState(true)
  const [response, setResponse] = useState<ResponseType>({errorText: "", info: ""})

  const getResponse = (checked: boolean) => {
    hwAPI.postRequest(checked)
      .then((res) => {
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
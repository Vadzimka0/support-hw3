import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {

  const theme = useSelector<AppStoreType, string>(state => state.theme.currentTheme)
  const dispatch = useDispatch()

  const onChangeCallback = (value: string) => {
    dispatch(changeThemeAC(value))
  };

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
        homeworks 12
      </span>
      <div style={{padding: '30px 0'}}>
        <SuperRadio
          name={'radio'}
          options={themes}
          value={theme}
          onChangeOption={onChangeCallback}
        />
      </div>
      <hr/>
    </div>
  );
}

export default HW12;

import React from 'react';
import c from './Message.module.css';

export type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={c.chat__body}>
      <div className={c.message}>

        <img className={c.message__avatar}
             src={props.avatar} alt="ava"/>

        <div className={c.message__area}>
          <div className={c.message__author}>{props.name}</div>
          <div className={c.message__text__content}>
            <span className={c.message__text}>{props.message}</span>
            <div className={c.message__time}>{props.time}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Message

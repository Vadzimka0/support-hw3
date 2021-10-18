import React from 'react'
import s from './../pages/Error404.module.css'

function Error404() {
    return (
        <div>
          <div className={s.emoji}>☹️</div>
          <div className={s.title}>404</div>
            <div className={s.text}>Sorry, we can’t seem to find what you’re looking for.</div>
        </div>
    )
}

export default Error404

import React from "react"
import s from "./Info.module.scss"

const Info = ({img, text, title}) => {
  return (
    <div className={s.box}>
      <img className={s.img} src={img} alt="info" />
      <h4 className={s.title}>{title}</h4>
      <p className={s.text}>{text}</p>
      <button className={s.btn}>
        <img  className={s.arrow} src="/img/arrowNext" alt="arrow" />
        Back
      </button>
    </div>
  )
}
export default Info
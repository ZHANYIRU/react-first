import { useState } from 'react'
import './Birthday.css'

function Birthday() {
  const year = []
  for (let i = 1920; i <= 2010; i++) {
    year.push(i)
  }
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [yearValue, setYearValue] = useState(0)
  const [monthValue, setMonthValue] = useState(0)
  const day = []
  const days = new Date(yearValue, monthValue, 0).getDate()
  for (let i = 1; i <= days; i++) {
    day.push(i)
  }
  const [dayValue, setDayValue] = useState(0)
  const [howOld, setHowold] = useState('')
  const eighteen = 568036800000
  const userTime = +new Date(`${yearValue}/${monthValue}/${dayValue}`)
  const nowDay = +new Date()
  return (
    <>
      <h1>生日</h1>
      <select
        value={yearValue}
        onChange={(e) => {
          setYearValue(e.target.value)
        }}
      >
        <option>{'年'}</option>
        {year.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={monthValue}
        onChange={(e) => {
          setMonthValue(e.target.value)
        }}
      >
        <option>{'月'}</option>
        {month.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={dayValue}
        onChange={(e) => {
          setDayValue(e.target.value)
        }}
      >
        <option>{'日'}</option>
        {day.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>
      <br />
      <button
        onClick={() => {
          if (nowDay - userTime < eighteen) {
            setHowold('未滿18')
          } else {
            setHowold('已滿18')
          }
        }}
      >
        計算年齡
      </button>
      <p className={howOld === '未滿18' ? 'no' : 'yes'}>{howOld}</p>
    </>
  )
}

export default Birthday

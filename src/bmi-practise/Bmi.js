import { useState } from 'react'

function Bmi() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [total, setTotal] = useState('')
  const [answer, setAnswer] = useState('')
  return (
    <>
      <h1>BMI計算</h1>
      <label>身高：</label>
      <input
        type="number"
        value={height === 0 ? '' : height}
        onChange={(e) => {
          setHeight(Number(e.target.value))
        }}
        placeholder={'請輸入身高(公分)'}
      />
      <br />
      <label>體重：</label>
      <input
        type="number"
        value={width === 0 ? '' : width}
        onChange={(e) => {
          setWidth(Number(e.target.value))
        }}
        placeholder={'請輸入體重(公斤)'}
      />
      <br />
      <button
        onClick={() => {
          let a = width / Math.pow(height / 100, 2)
          if (a < 18.5) {
            setAnswer('過輕')
          } else if (a >= 18.5 && a < 24) {
            setAnswer('健康！')
          } else if (a >= 24 && a <= 27) {
            setAnswer('過重')
          } else {
            setAnswer('肥胖')
          }
          setTotal((width / Math.pow(height / 100, 2)).toFixed(1))
          //   console.log(width)
          //   console.log(Math.pow(height / 100, 2))
        }}
      >
        計算
      </button>
      <p>{total}</p>
      <p>{answer}</p>
    </>
  )
}
export default Bmi

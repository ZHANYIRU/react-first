import { useState } from 'react'

function Bmi() {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [total, setTotal] = useState('')
  return (
    <>
      <label>身高：</label>
      <input
        type="text"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
        placeholder={'公分'}
      />
      <span>{total}</span>
      <br />
      <label>體重：</label>
      <input
        type="text"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value)
        }}
        placeholder={'公斤'}
      />
      <br />
      <button
        onClick={() => {
          setTotal(width / Math.pow(height / 100, 2))
          //   console.log(width)
          //   console.log(Math.pow(height / 100, 2))
        }}
      >
        計算
      </button>
    </>
  )
}
export default Bmi

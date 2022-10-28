import { useState } from 'react'
import InputID from './InputID'
import InputRef from './InputRef'

function InputDemo() {
  const [inputData, setInputData] = useState('')

  return (
    <>
      <p>可控表單</p>
      <input
        type="text"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setInputData('test@gmail.com')
        }}
      >
        載入資料
      </button>
      <p>不可控表單(id)</p>
      <InputID />
      <InputID />
      <p>不可控表單(ref)</p>
      <InputRef />
      <InputRef />
    </>
  )
}

export default InputDemo

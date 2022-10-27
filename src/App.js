// import Conter from './ex-1025/Conter'
// import JsxValue from './ex-1026/JsxValue'
// import StudentList from './ex-1026/StudentList'
import { examples } from './examples'
import { useState } from 'react'

function App() {
  //記錄選中的索引值，資料為數字資料類型
  const [displayIndex, setDisplayIndex] = useState(0)
  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )
  //動態元件語法，命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component
  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  )
}

export default App

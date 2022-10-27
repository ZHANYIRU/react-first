import { useState } from 'react'

export default function Linepay() {
  const [data, setData] = useState('')
  return (
    <>
      {/* <p>訂單編號</p>
      <p>金額：3000</p> */}
      <p>Node回傳資料:{data}</p>
      <button
        onClick={() => {
          fetch('http://localhost:3001/LinePay')
            .then((r) => r.json())
            .then((data) => {
              setData(data)
            })
        }}
      >
        結帳
      </button>
    </>
  )
}

import { useRef } from 'react'
function InputRef() {
  //會變成{current:null}
  const inputRef = useRef(null)
  return (
    <>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}

export default InputRef

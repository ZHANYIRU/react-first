function InputID() {
  return (
    <>
      <input type="text" id="inputId" />
      <button
        onClick={() => {
          document.querySelector('#inputId').value = 'test@gmail.com'
        }}
      >
        載入資料
      </button>
    </>
  )
}
export default InputID

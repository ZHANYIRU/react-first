function JsxValue() {
  return (
    <>
      <h1>JSX啊啊啊啊啊</h1>
      <hr />
      <h2>Number</h2>
      {100 - 31}
      {NaN}
      <h2>String</h2>
      {'abccc'}
      {`total=${100 - 5}`}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefind</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4, 5]}
      <h2>Object</h2>
      {/* 會有中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {}}
    </>
  )
}
export default JsxValue

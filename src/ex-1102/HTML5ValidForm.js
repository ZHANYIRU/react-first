import { useState } from 'react'

function HTML5ValidForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  })
  // 記錄欄位有錯誤時的訊息
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
  })
  // true = 呈現密碼 / false = 隱藏密碼
  const [show, setShow] = useState(false)
  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  const handleFormSubmit = (e) => {
    // 阻擋預設form送出的行為
    e.preventDefault()

    // 得到輸入值的方式
    // 第1種，從state直接得到
    console.log(user)

    // 第2種，用FormData物件
    const formData = new FormData(e.target)
    console.log(
      formData.get('username'),
      formData.get('email'),
      formData.get('password')
    )

    // 其它驗証…修改

    // 送到伺服器
  }
  const handleFormInvalid = (e) => {
    //阻擋行為-關閉泡泡訊息
    e.preventDefault()
    //設定錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }
  const handleFormChange = (e) => {
    //要把目前正在修改的欄位的錯誤訊息先清空
    console.log(e)
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }
  // const click = (e) => {
  //   console.log(e.target.name)
  // }
  return (
    <>
      <form
        // onClick={click}
        action=""
        // name='form1'
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid} //表單有不合法驗證的時候觸發
        onChange={handleFormChange} //表單欄位有任何動作時觸發
      >
        <label>帳號：</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required //將欄位變為必填
        />
        <span>{fieldErrors.username}</span>
        <br />
        <label>Email：</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleFieldChange}
          required //將欄位變為必填
        />
        <span>{fieldErrors.email}</span>
        <br />
        <label>密碼：</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required //將欄位變為必填
        />
        <span>{fieldErrors.password}</span>
        <input
          type="checkbox"
          name="show"
          checked={show}
          onChange={() => {
            setShow(!show)
          }}
        />
        <label>顯示密碼</label>
        <br />
        <button type="submit">送出</button>
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'eddy123',
              email: 'test@gmail.com',
              password: '123456',
            })
          }}
        >
          填入範例資料
        </button>
      </form>
    </>
  )
}

export default HTML5ValidForm

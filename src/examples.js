import JsxValue from './ex-1026/JsxValue'
import Conter from './ex-1025/Conter'
import StudentList from './ex-1026/StudentList'
// import Menu from './1.選單項目/Menu'
import Demo from './2.物件陣列處理練習/Demo'
import Parent from './ex-1027/Parent'
import Linepay from './LINEPAY/Linepay'

//export default的時候 可以在導入(import)時直接改名稱
import ParentPropTypes from './ex-1027-02/Parent'
import ParentDataFlow from './ex-1027-03/Parent'
import InputDemo from './ex-1028/InputDemo'
import HTML5Form from './ex-1028-02/HTML5Form'
import Bmi from './bmi-practise/Bmi'
import Birthday from './birthday-practise/Birthday'
import TodoApp from './ex-1031/TodoApp'
import MultipleInput from './ex-1101-1/MultipleInput'
import HTML5ValidForm from './ex-1102/HTML5ValidForm'
import Lifecycle from './ex-1102-02/Lifecycle'
import User from './ex-1102-03/User'
import FileUploadSample from './ex-1102-04/FileUploadSample'
import ImageDemo from './ex-1103-01/ImageDemo'
import UserDemo from './ex-1103-02/UserDemo'
import UserPage from './ex-1104-01/UserPage'
import BS5Test from './ex-1104-02/BS5Test'

export const examples = [
  {
    name: 'Bootstrap5測試',
    path: './ex-1104-02/BS5Test',
    component: BS5Test,
  },
  {
    name: '從伺服器載入資料 分頁',
    path: './ex-1104-01/UserPage',
    component: UserPage,
  },
  {
    name: '從伺服器載入資料 搜尋&分頁',
    path: './ex-1103-02/UserDemo',
    component: UserDemo,
  },
  {
    name: '圖檔使用說明',
    path: './ex-1103-01/ImageDemo',
    component: ImageDemo,
  },
  {
    name: '圖檔上傳範例',
    path: './ex-1102-03/User./ex-1102-04/FileUploadSample',
    component: FileUploadSample,
  },
  {
    name: '從伺服器載入資料',
    path: './ex-1102-03/User',
    component: User,
  },
  {
    name: '生命週期方法',
    path: './ex-1102-02/Lifecycle',
    component: Lifecycle,
  },
  {
    name: 'HTML5表單驗證',
    path: './ex-1102/HTML5ValidForm',
    component: HTML5ValidForm,
  },
  {
    name: '多個表單元素共用單一state',
    path: './ex-1101-1/MultipleInput',
    component: MultipleInput,
  },
  {
    name: '待辦事項',
    path: './ex-1031/TodoApp',
    component: TodoApp,
  },
  {
    name: 'Birthday練習題',
    path: './birthday-練習題/Birthday',
    component: Birthday,
  },
  {
    name: 'Bmi練習題',
    path: './bmi-練習/Bmi',
    component: Bmi,
  },
  {
    name: '各種可控表單元件',
    path: './ex-1028-02/HTML5Form',
    component: HTML5Form,
  },
  {
    name: '可控與不可控表單',
    path: './ex-1028/InputDemo',
    component: InputDemo,
  },
  {
    name: 'props三種資料流',
    path: './ex-1027-03/Parent',
    component: ParentDataFlow,
  },
  {
    name: 'props屬性定義類別',
    path: './ex-1027-02/Parent',
    component: ParentPropTypes,
  },
  {
    name: 'props屬性',
    path: './ex-1027/Parent',
    component: Parent,
  },
  {
    name: '物件陣列資料處理',
    path: './2.物件陣列處理練習/Demo',
    component: Demo,
  },
  {
    name: '計數器',
    path: './ex-1025/Conter',
    component: Conter,
  },
  {
    name: 'JSX中的值與表達式',
    path: './ex-1026/JsxValue',
    component: JsxValue,
  },
  {
    name: '學生列表清單(map-key)',
    path: './ex-1026/StudentList',
    component: StudentList,
  },
  // {
  //   name: '選單active(map-key)',
  //   path: './1.選單項目/Menu',
  //   component: Menu,
  // },
  {
    name: 'LinePay',
    path: './LINEPAY/Linepay',
    component: Linepay,
  },
]

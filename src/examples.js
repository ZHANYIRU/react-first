import JsxValue from './ex-1026/JsxValue'
import Conter from './ex-1025/Conter'
import StudentList from './ex-1026/StudentList'
import Menu from './1.選單項目/Menu'
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

export const examples = [
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
  {
    name: '選單active(map-key)',
    path: './1.選單項目/Menu',
    component: Menu,
  },
  {
    name: 'LinePay',
    path: './LINEPAY/Linepay',
    component: Linepay,
  },
]

import { createApp } from 'vue'
import App from './App.vue'
import { 
  Button,
  Col, 
  Row, 
  RadioGroup, 
  Radio, 
  Calendar, 
  Picker,
  Popup,
  Icon,
  List,
  Cell,
  NavBar,
  Field, 
  CellGroup,
  Dialog 
} from 'vant';
import router from '@/router/index'
createApp(App)
.use(router)
.use(Button)
.use(Col)
.use(Row)
.use(RadioGroup)
.use(Radio)
.use(Calendar)
.use(Picker)
.use(Popup)
.use(Icon)
.use(List)
.use(Cell)
.use(NavBar)
.use(Field)
.use(CellGroup)
.use(Dialog)
.mount('#app')

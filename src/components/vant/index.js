import Vue from 'vue'

import {
    PullRefresh,
    List,
    Col,
    Row,
    NavBar,
    Search,
    Popup,
    Button,
    Swipe,
    SwipeItem,
    Form,
    Field,
    Tab,
    Tabs,
    Cell,
    CellGroup,
    Icon,
    Dialog,
    Toast,
    ActionSheet,
    Calendar,
    DatetimePicker,
    Grid,
    GridItem,
    SwipeCell,
    Area,
    Picker,
    Uploader,
    Overlay,
    Lazyload,
    Loading,
    Checkbox,
    CheckboxGroup,
    NoticeBar
} from 'vant'

//可以使用vue.use(a).(b)的链式操作
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Col)
Vue.use(Row)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(Popup)
Vue.use(Button)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(ActionSheet)
Vue.use(Calendar)
Vue.use(DatetimePicker)
Vue.use(Grid)
Vue.use(GridItem)

Vue.use(Uploader)
Vue.use(Picker)
Vue.use(SwipeCell)
Vue.use(Overlay)
Vue.use(Loading)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(NoticeBar)
Vue.use(Area)
Vue.use(Lazyload, {
    lazyComponent: true,
});

Vue.prototype.$toast = Toast
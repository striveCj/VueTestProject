import
{
  SET_BASEINFO,
  CLEAR_BASEINFO,
  GET_BASEINFO,
  COMMEN_ROLE,
  GET_BGCOLOR,
  GET_FONTCOLOR,
  GET_BORDERCOLOR,
  GET_ACTIVECOLOR,
  EXCHANGE_ROLE

} from '../mutation_types'

const state = {
  id: undefined,
  open_id: undefined,
  role:undefined
}

const mutations = {
  //设置用户个人信息
  [SET_BASEINFO](state, data) {
    try {
      state.id = data.id
      state.open_id = data.role
      state.role = data.role
    } catch (err) {
      console.log(err)
    }
  },
  //注销用户操作
  [CLEAR_BASEINFO](state) {
    console.info('清理缓存')
    window.localStorage.clear()
  },
  
}
const getters = {
  [GET_BASEINFO]: state => {
    console.info("进入getter")
    let localStorage = window.localStorage
    let user_info
    if (localStorage.getItem('SLLG_BASEINFO')) {
      console.log("有数据")
      user_info = JSON.parse(localStorage.getItem('SLLG_BASEINFO'))
    } else {
      console.info('没有数据')
    }
    return user_info
  }
}

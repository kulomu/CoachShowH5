

// action 是组件内用来分发mutation的函数
import axios from '../utils/httpAjax'

export const setUserInfo = ({ commit }, userInfo) => {
    commit('SET_USERINFO', userInfo)
}
export const setTelephoneNo = ({ commit }, telephoneNo) => {
    commit('SET_TELEPHONENO', telephoneNo)
}

// export const setActiveName = ({ commit }, activeName) => {
//     commit('SET_ACTIVENAME', activeName)
// }


// export const setUserName = ({ commit }) => {
//     return new Promise((resolve, reject) => {
//         let url = 'api/user'
//         axios.get(url).then((res) => {
//             let data = res.data
//             if (res.status === 200) {
//                 commit('SET_USERNAME', data.eid + data.empName + ' ( ' + data.deptName + ' )')
//                 resolve()
//             }
//         }).catch((error) => {
//             reject('setUserName异常')
//         })
//     })
// }
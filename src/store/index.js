import { createStore } from 'vuex'

//导入用户信息的module
import ModuleUser from './user'


export default createStore({

    //存数据
    state: {

    },

    //需要计算获取数据的时候
    getters: {

    },
    //各种对state修改操作放在其中
    mutations: {

    },

    //各种对于state的操作,不可以对state修改
    actions: {

    },
    //将state复杂的信息进行分割
    // 新建一个单独的module然后导入进来
    modules: {
        user: ModuleUser,
    }
})
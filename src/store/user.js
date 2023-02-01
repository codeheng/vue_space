import $ from 'jquery'

//引入jwt解码包
import jwt_decode from 'jwt-decode'

const ModuleUser = {

    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getter: {

    },
    mutations: {
        //更新用户信息函数
        updateUser(state, user) {
            state.id = user;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        //五分钟获取后，再更新access
        updateAccess(state, access) {
            state.access = access;
        },
        //点击退出修改state,删除jwt,
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        },

    },
    actions: {
        login(context, data) {
            //通过api获取token 
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "post",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    //console.log(resp);
                    //获取access，refresh
                    const { access, refresh } = resp;
                    const access_obj = jwt_decode(access);
                    //console.log(access_obj, refresh); //可打印出用户id

                    //每隔五分钟获取一次【因为会过期】
                    setInterval(() => {
                        $.ajax({
                            //给定的刷新api
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "post",
                            data: {
                                refresh,
                            },
                            success(resp) {
                                //console.log(resp); 每个时间打印输出刷新的情况
                                context.commit("updateAccess", resp.access);
                            }
                        })
                    }, 1000 * 60 * 4.5);

                    //获取用户信息，需要用到jwt验证
                    // 通过id获取信息
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "get",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        //背过即可
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            // console.log(resp) //此时可打印出用户信息
                            context.commit("updateUser", {
                                //解构resp,展开成逗号隔开的值
                                ...resp,
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            });
                            data.success();
                        },
                    });
                },
                error() {
                    data.error();
                }
            });
        },


    },
    modules: {

    }
};

export default ModuleUser;
<template>
    <ContainerBase>
      <div class="row justify-content-md-center">
        <div class = "col-3">
          <!-- @submit.prevent阻止之前默认的提交行为 -->
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">用户名</label>
              <input v-model="username" type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密码</label>
              <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class = "error-message">{{ error_msg }}</div>
            <button type="submit" class="btn btn-primary">登陆</button>
          </form>
        </div>
      </div>
      
    </ContainerBase>
</template>

<script>
import ContainerBase from '@/components/ContainerBase'
import {ref} from 'vue';
//导入vuex
import {useStore} from 'vuex';
//引入router
import router from '@/router/index';

export default {
  name: 'Login',
  components: {
    ContainerBase,
  },
  setup() {
    //定义用户名和密码变量，利用v-model进行绑定
    let username = ref('');
    let password = ref('');
    //密码错误信息
    let error_msg = ref('');

    //定义vuex对应的store【全局变量】
    const store = useStore();

    //登陆之后触发的事件
    const login = () => {
      //每次登陆清空错误信息
      error_msg.value = "";
      // 登陆后的信息为全局变量,可以用 Vuex 机制【static】
      //  故将登陆的信息存在vuex中
      //console.log(username.value, password.value);

      //调用vuex当中的actions用store.dispatch
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          console.log("success");
          //成功后跳转
          router.push({name :'userlist'})
        },
        error() {
          console.log("failed!");
          error_msg.value = "用户名或密码错误";
        }
      })

    }



    return {
      username,
      password,
      error_msg,
      login,
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}
.error-message{
  color: red;
  text-align: left;
}
</style>>

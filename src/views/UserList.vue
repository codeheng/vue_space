<template>
    <ContainerBase>
      <!--所有for循环都需绑定一个key -->
      <div class="card" v-for="user in users" :key="user.id">
        <div class="card-body">
          <div class="row">
            <div class="col-1">
              <!-- 头像 -->
              <img class="img-fluid" :src="user.photo" alt="">
            </div>
            <div class="col-11">
              <div class="username">{{user.username}}</div>
              <div class="follower-count">{{user.followerCount}}</div>
            </div>
          </div>
        </div>
      </div>
    </ContainerBase>
</template>

<script>
import ContainerBase from '@/components/ContainerBase'

//导入jquery,利用Ajax与后台API交互
import $ from 'jquery';
//定义用户,先引入变量
import { ref } from 'vue';

export default {
  name: 'UserList',
  components: {
    ContainerBase
  },
  setup() {
    //用户初始为空
    let users = ref([]);
    //获取后台的API用户数据
    $.ajax( {
        url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
        type: "GET",
        success(resp) {
          //console.log(resp);
          users.value = resp;
        }

    })

    return {
      users,
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}

.username {
  font-weight: bold;
  height: 50%;
}
.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}
.col-11{
 /* 让div外层里面的内层div的文字左对齐 */
  text-align: left;
}
.card {
  margin-bottom: 20px;
  /* 鼠标在上面变成小手效果 */
  cursor: pointer;
}
/* 阴影效果 */
.card:hover {
  /* 鼠标在上面会显示阴影 */
  box-shadow: 2px 2px 10px gray;
  /* 反应周期 */
  transition: 500ms;
}
</style>>

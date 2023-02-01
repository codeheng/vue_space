<template>
    <ContainerBase>
      <div class="row">
        <div class="col-3">
          <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
          <UserProfileWrite  @submit_post="submit_post" />
        </div>
        <div class="col-9">
          <UserProfilePosts :posts="posts" />
        </div>
      </div>
    </ContainerBase>
</template>

<script>
import ContainerBase from '@/components/ContainerBase'
// 引入UserProfileInfo组件
import UserProfileInfo from '@/components/UserProfileInfo'
// 引入UserProfilePost组件
import UserProfilePosts from '@/components/UserProfilePosts'

//接收变量
import {reactive} from 'vue';
//引入发帖模块
import UserProfileWrite from '@/components/UserProfileWrite'

//通过给定的参数访问网址
import { useRoute} from 'vue-router';

export default {
  name: 'UserProfile',
  // 其余引入的模块，都要放入components中
  components: {
    ContainerBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrite,
  },
  setup() {

    //返回useRoute对象
    const route = useRoute();
    //取到网址路径中的id参数
    const userId = route.params.userId;
    //打印看看
    console.log(userId);


    //用户相关的信息
    const user = reactive( {
      id : 1,
      username: "Yiheng",
      lastname: "Huang",
      firstname: "Yiheng",
      followerCount: 0,
      is_followed:false,
    });

    //帖子列表信息,reactive类型,引用他的会重新渲染
    const posts = reactive( {
      count : 3,
      posts : [
        {
          id : 1,
          userId:1,
          content: "今天真特么开心！",
        },
         {
          id : 2,
          userId:1,
          content: "开心！",
        },
         {
          id : 3,
          userId:1,
          content: "今天开心级了！",
        },
        
      ]
    })


  //定义事件,绑定函数触发之后调用,为了让子组件触发
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount ++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount --;
    };

    //发帖函数,子组件传信息给父组件,接收
    const submit_post = (content) => {
      posts.count ++;
      // unshift在最前面加,push在最后面
      posts.posts.unshift({
        id:posts.count,
        userId:1,
        content: content,
      })
    };

    

    //将数据返回供前面template中调用显示
    return {
      user,
      follow,
      unfollow,
      posts,
      submit_post,
    }
  }
}
</script>

<style scoped>

</style>>

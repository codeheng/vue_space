<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
            <!-- img-fluid头像会自适应大小 -->
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/187900_lg_fab12910b9.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{ fullName }}</div>
                    <div class="fans">粉丝数：{{ user.followerCount }}</div>
                    <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>

                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
import { computed } from 'vue';

export default {
    name: "UserProfileInfo",
    props: {
        user : {
            type: Object,
            required : true,
        },
    },
    // 动态计算相应值
    setup(props, context) {
        let fullName = computed(() => props.user.lastname + ' ' + props.user.firstname);

        //定义事件处理函数[关注or取消关注]
        const follow = () => {
            //子组件触发父组件的函数,传递参数是在UserProfile中的@follow,与其对应
            context.emit('follow');
        };
        const unfollow = () => {
            context.emit('unfollow');
        };

        return {
            fullName,
            follow,
            unfollow,
        }
    }
}
</script>

<style scoped>
/* 让头像变成圆形 */
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}
.fans {
    font-size: 12px;
    color: gray;
}
button {
    padding: 2px 4px;
    font-size: 12px;
}
.col-9 {
    /* 让div外层里面的内层div的文字左对齐 */
  text-align: left;
}

</style>>

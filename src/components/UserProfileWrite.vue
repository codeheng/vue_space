<template>
    <div class="card edit-field">
        <div class="card-body">
            <div class="form-floating">
                <div class="form-floating">
                    <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">编辑帖子</label>
                    <button @click="submit_post" type="button" class="btn btn-primary btn-sm">发帖</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';

// export出去之后,别的地方就可以引用了
export default {
    name : "UserProfileWrite",
    setup(props, context) {
        //获得帖子的信息,利用v-model进行绑定
        let content = ref('');

        //定义click函数
        const submit_post = () => {
            //子组件传父组件，触发submit_post的事件,参数为content.value
            context.emit('submit_post',content.value);
            content.value = "";
        }
        return {
            content,
            submit_post,
        }
    }
}
</script>

<style scoped>
.edit-field{
    margin-top: 20px;
}
button {
    margin-top: 10px;
}
</style>
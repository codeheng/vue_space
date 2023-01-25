<template>
    <div class="home">
        <div class="container">
        <div class="card">
            <div class="card-body">
                <!--会将其余文件的ContentBase的子元素全部渲染到slot中 -->
                <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "ContentBase",
}
</script>

<style>
.container {
  margin-top: 20px;
}
</style>
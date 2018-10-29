<template>
   <el-alert v-if="a" title="这是标题" type="success"></el-alert>
   <div v-else></div>
</template>
<script>
    export default {
        data() {
            return {
                a: true
            }
        }
    }
</script>

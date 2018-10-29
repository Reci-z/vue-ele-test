<template>
    <transition>
        <div class="el-alert el-alert--success">
            <i class="el-alert__icon el-icon-success"></i>
            <div class="el-alert__content">
                <span class="el-alert__title">wenzi</span>
                <slot>
                    <p class="el-alert__description">内容</p>
                </slot>
                <i class="el-alert__closebtn el-icon-close"></i>
            </div>
        </div>
    </transition>
</template>
<script>
/**
 * alert组件功能
 *       - title：标题
 *       - type：主题颜色
 *       - description ： 描述文字
 *       - closable ： 是否可关闭
*        - center ： 文字居中
         - close-text ： 关闭按钮自定义文本
         - show-icon 是否显示图标

    事件：
    关闭按钮
 *  */
export default {
    name:"ElAlert"
}
</script>



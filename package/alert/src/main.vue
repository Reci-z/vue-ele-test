<template>
    <transition>
        <div 
            class="el-alert el-alert--success" 
            :class=[typeClass,]
        >
            <!-- 图标 -->
            <i class="el-alert__icon el-icon-success"></i>
            <div class="el-alert__content">
                <!-- 标题 -->
                <span class="el-alert__title">{{title}}</span>
                <!-- 描述 -->
                <slot>
                    <p class="el-alert__description">{{ description }}</p>
                </slot>
                <!-- 关闭按钮 -->
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
 *          success/warning/info/error
 *           
 *       - description ： 描述文字
 *       - closable ： 是否可关闭
*        - center ： 文字居中
         - close-text ： 关闭按钮自定义文本
         - show-icon 是否显示图标

    事件：
    关闭按钮
 *  */
export default {
    name:"ElAlert",
    props:{
        title:{
            type:String,
            default:"标题",
            required:true
        },
        description:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:"info"
        },
        center:Boolean
    },
    computed:{
        typeClass(){
            return 'el-alert--' + this.type;
        }
    }
}
</script>


